<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use App\Employee;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'middle_name' => $faker->lastName,
        'date_hired' => $faker->date(),
        'customer_id' => factory(Customer::class)->create()
    ];
});
