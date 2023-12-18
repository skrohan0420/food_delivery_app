const express = require('express');
const router = express.Router();
const Food = require('../models/food');


router.post('/food-items', (req,res) =>{

    Food.items.find()
    .then(result =>{
        console.log(result)
        res.json({ result: result});
    })
    .catch(err => {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    });

})
router.post('/food-category', (req,res) =>{

    Food.category.find()
    .then(result =>{
        console.log(result)
        res.json({ result: result});
    })
    .catch(err => {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    });

})
module.exports = router;
