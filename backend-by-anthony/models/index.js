const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
    //TODO: add more fields(eg. email, phone, etc.)
})

module.exports = mongoose.model('Data', dataSchema)