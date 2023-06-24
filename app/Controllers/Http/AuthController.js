'use strict'

const User = use('App/Models/User')

class AuthController {
    showRegisterForm({ view }) {
        return view.render('register')
    }
}

module.exports = AuthController