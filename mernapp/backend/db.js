const mongoose = require('mongoose')


const dbURI = 'mongodb+srv://BecGbWLy2urBa0gE:BecGbWLy2urBa0gE@rohan.baf7f9w.mongodb.net/food_app?retryWrites=true&w=majority'

const mongoDB = () => {

    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(result => console.log('---- db connected'))
        .catch(err => console.log(err));
}

module.exports = mongoDB;