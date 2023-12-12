const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();




app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./Routes/createUser'))


app.get('/',(req, res) =>{
    res.send('works')
})
app.listen(port, ()=>{
    console.log(port)
})