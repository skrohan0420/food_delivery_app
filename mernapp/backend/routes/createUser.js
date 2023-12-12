const express = require('express');
const router = express.Router();

const Users = require('../models/users');

router.post('/create-user', (req, res) => {

    const UsersDetails = new Users.details({
        'name': 'rohan',
        'password': '123456',
        'email': 'skohan0420@gmail.com',
        'location': 'india'
    });
    UsersDetails.save()
    .then(result => {
        console.log(result);
        res.json({'success': true})
    })
    .catch(err => {
        console.log(err);
        res.json({'success': false})

    });

})

module.exports = router;