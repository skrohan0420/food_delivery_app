const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersDetailsSchema = Schema({
    name :{
        type : String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true })

const details = mongoose.model('users', UsersDetailsSchema);

module.exports = {
    details,
};
