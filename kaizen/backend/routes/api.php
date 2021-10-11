<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('token.auth')->group(function(){
    Route::get('/home', 'HomeController@index')->name('home');

});

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
