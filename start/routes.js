'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('users', 'UserController.query')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('forgot_passwords', 'ForgotPasswordController.store')
Route.put('forgot_passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.get('files/:id', 'FileController.show')
  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
