const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();


app.get('/',(req, res) =>{
    res.send('works')
})

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./Routes/createUser'))

app.listen(port, ()=>{
    console.log(port)
})