const mongoose = require('mongoose');

let Person = mongoose.model('Person', {
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    }
});
module.exports = { Person };