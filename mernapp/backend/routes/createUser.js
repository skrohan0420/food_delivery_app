const express = require('express');
const app = express();
const router = express.Router();
const Users = require('../models/users');
const { body, validationResult } = require('express-validator');


router.post('/create-user', express.json({ type: '*/*' }),
    [
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),
        body('name').isLength({ min: 3 })
    ],
    (req, res) => {

        const result = validationResult(req)
        if (result.isEmpty()) {
            const UsersDetails = new Users.details(req.body);
            UsersDetails.save()
                .then(result => {
                    console.log(result);
                    res.json({ 'success': true })
                })
                .catch(err => {
                    console.log(err);
                    res.json({ 'success': false })

                });
        } else {
            res.json(result.array());
        }
    })
router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(req.body)
    Users.details.findOne({email})
        .then(result => {
            console.log(result)
            if(result && result.password === password){
                res.json({ success: true, message: 'user found' });
            }else{
                res.json({ success: false, message: 'user not found' });
            }
            
        })
        .catch(err => {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
});

module.exports = router;