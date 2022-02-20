const express = require('express')
const router = express.Router()
const signUpModels = require('../models/SignUpModels')
const bcrypt = require('bcrypt') /* bcrypt is a password-hashing function  */

router.post('/signup', async function(request, response) {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassowrd = await bcrypt.hash(request.body.password, saltPassword)

    const userSignUp = new signUpModels({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: securePassowrd,
    })
    userSignUp.save() /* method yang ada di mongoose untuk save perubahan record (?)*/
    .then(data => {
        response.json(data)
    })
    .catch(err => {
        response.json(err)
    })
})

module.exports = router