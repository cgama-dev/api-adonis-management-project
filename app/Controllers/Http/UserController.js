'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {

    const data = request.only(['username', 'email', 'password'])

    const user = User.create(data)

    return user

  }

  async query({ request }) {
    const users = await User.all()

    return users
  }
}

module.exports = UserController
