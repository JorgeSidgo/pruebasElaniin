<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


/**
 * Routes for resource user
 */
$router->post('user/login', 'UsersController@getToken');

$router->group(['middleware' => ['auth']], function () use ($router) {
    $router->get('user', 'UsersController@all');
    $router->get('user/{id}', 'UsersController@get');
    $router->post('user', 'UsersController@create');
    $router->put('user', 'UsersController@update');
    $router->delete('user/{id}', 'UsersController@delete');
});

/**
 * Routes for resource role
 */
$router->get('role', 'RolesController@all');
//$router->get('role/{id}', 'RolesController@get');
//$router->post('role', 'RolesController@add');
//$router->put('role/{id}', 'RolesController@put');
//$router->delete('role/{id}', 'RolesController@remove');
