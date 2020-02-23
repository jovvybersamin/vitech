<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
    Route::post('login', 'SignInController')->name('auth.login');
    Route::post('logout', 'SignOutController')->name('auth.logout');
    Route::get('me', 'MeController')->name('auth.me');
});


Route::get('/users', 'UserController@index')->name('users.list');

Route::prefix('customers')->group(function () {
    Route::post('', 'CustomerController@store')->name('users.store');
    Route::put('{customer}','CustomerController@update')->name('users.update');
    Route::get('', 'CustomerController@index')->name('users.list');
    Route::get('{id}', 'CustomerController@show')->name('users.show');
});

Route::prefix('employees')->group(function () {
    Route::post('', 'EmployeeController@store')->name('users.store');
    Route::put('{employee}','EmployeeController@update')->name('users.update');
    Route::get('', 'EmployeeController@index')->name('users.list');
    Route::get('{id}', 'EmployeeController@show')->name('users.show');
});
