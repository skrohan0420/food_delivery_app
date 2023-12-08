const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();


app.get('/',(req, res) =>{

    res.send('works')
})

app.listen(port, ()=>{
    console.log(port)
})