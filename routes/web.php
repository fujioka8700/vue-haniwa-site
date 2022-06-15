<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/javascript', function() {
    return view('javascript/basic01');
});

Route::get('/vue', function() {
    return view('vue/app');
});

Route::get('/altitude', function() {
    return view('vue/altitude');
});

Route::get('/sfc', function() {
    return view('vue/sfc');
});

Route::get('/vuex', function() {
    return view('vue/vuex');
});

Route::get('/tasks', function() {
    return view('vue/tasks');
});

Route::get('/store', function() {
    return view('vue/store');
});