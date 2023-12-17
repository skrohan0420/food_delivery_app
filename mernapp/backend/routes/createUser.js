const express = require('express');
const app = express();
const router = express.Router();
const Users = require('../models/users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const jwtSecret = 'xYiLjHsRcPwNqEoGvKaZmXdFbUiTgHr'

router.post('/create-user', express.json({ type: '*/*' }),
    [
        body('email').isEmail(),
        body('password').isLength({ min: 6 }),
        body('name').isLength({ min: 3 })
    ],
    async (req, res) => {

        const result = validationResult(req)
        if (result.isEmpty()) {
           
            const salt =  bcrypt.genSaltSync(10);
            let setPassword = await bcrypt.hash(req.body.password, salt)
            console.log(setPassword);
            console.log(req.body.password);
            const UsersDetails = new Users.details({
                name  : req.body.name,
                email  : req.body.email,
                location  : req.body.name,
                password  : setPassword,
            });
            res.json({ 'success': setPassword })
            // UsersDetails.save()
            // .then(result => {
            //     console.log(result);
            //     res.json({ 'success': true })
            // })
            // .catch(err => {
            //     console.log(err);
            //     res.json({ 'success': false })

            // });
        } else {
            res.json(result.array());
        }
})


router.post('/login', (req, res) => {
    let email = req.body.email;
    console.log(req.body)
    Users.details.findOne({ email })
        .then(async (result) => {
            console.log(result)
            if (result && await bcrypt.compare(req.body.password,result.password)) {
                const data = {
                    user : {
                        id: result.id
                    }
                }
                const authToken = jwt.sign(data,jwtSecret)

                res.json({ success: true, message: 'user found' , authToken: authToken});
            } else {
                res.json({ success: false, message: 'user not found' });
            }

        })
        .catch(err => {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
});

module.exports = router;