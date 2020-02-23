<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    // Useful if you have many fields in a model, instead of using fillable property.
    protected $guarded = [];

    // it will append the full_name mutator to json upon serialization
    // source: https://laravel.com/docs/5.7/eloquent-serialization#appending-values-to-json
    protected $appends = ['full_name'];


    /**
     * This employee can belong to one Customer at a time.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * This field is just a calculated field and it doesn't exist in database.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        $fullname = $this->first_name . ' ';
        if (!empty($this->middle_name)) {
            $fullname .= $this->middle_name . ' ';
        }
        return $fullname . $this->last_name;
    }
}
