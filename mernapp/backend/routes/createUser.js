const express = require('express');
const app = express();
const router = express.Router();
const Users = require('../models/users');
const { body, validationResult } = require('express-validator');


router.post('/create-user',express.json({type: '*/*'}),
    [
        body('email').isEmail(),
        body('password').isLength({min: 6}),
        body('name').isLength({min: 3})
    ],
    (req, res) => {

    const result = validationResult(req)
    if (result.isEmpty()) {
        const UsersDetails = new Users.details(req.body);
        UsersDetails.save()
        .then(result => {
            console.log(result);
            res.json({'success': true})
        })
        .catch(err => {
            console.log(err);
            res.json({'success': false})

        });
    }else{
        res.json(result.array());
    }
   

})

module.exports = router;