<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Employee;
use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\EmployeeResource;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Get the list of paginated employees.
     *
     * @return EmployeeCollection
     */
    public function index()
    {
        $pageSize = request()->get('results');
        $sortField = request()->get('sortField');
        $sortOrder = request()->get('sortOrder');
        $searchQuery = request()->get('searchQuery');

        if (!empty($sortField)) {
            $sortOrder = empty($sortOrder) ? 'ascend' : $sortOrder;
            $sortOrder = $sortOrder === 'ascend' ? 'asc' : 'desc';

            $sortField = $sortField === 'full_name' ? 'first_name' : $sortField;
            $sortField = $sortField === 'customer' ? 'customers.name' : $sortField;

        }

        // also include the associated customer.
        $userBuilder = Employee::orderBy($sortField, $sortOrder)->with('customer');
        $userBuilder = $userBuilder->join('customers', function($join){
            return $join->on('employees.customer_id','=','customers.id');
        });

        if ($searchQuery) {

            $userBuilder = $userBuilder->where('first_name', 'like', '%' . $searchQuery . '%')
                ->orWhere('last_name', 'like', '%' . $searchQuery . '%')
                ->orWhere('customers.name','like', '%' . $searchQuery . '%');
        }


        $collections = $userBuilder->select('employees.*'   )->paginate($pageSize);

        return new EmployeeCollection($collections);
    }

    /**
     * Store the employee resource to the database.
     *
     * @param EmployeeRequest $request
     * @return EmployeeResource
     */
    public function store(EmployeeRequest $request)
    {

        $validated = $request->validated();


        $employee = Employee::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'middle_name' => $request->get('middle_name'),
            'date_hired' => Carbon::parse($validated['date_hired']),
            'customer_id' => $validated['customer_id']
        ]);



        return new EmployeeResource($employee);
    }

    /**
     * Show a single employee resource from the database.
     *
     * @return EmployeeResource
     */
    public function show($id)
    {
        $employee = Employee::findOrFail($id);
        return new EmployeeResource($employee);
    }



    /**
     * Update the employee resource to the database.
     *
     * @param EmployeeRequest $request
     * @param Employee $employee
     * @return JsonResponse
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        $validated = $request->validated();

        $employee->update([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'middle_name' => $request->get('middle_name'),
            'customer_id' => $validated['customer_id']
        ]);

        return response()->json('Successfully Updated');
    }


}
