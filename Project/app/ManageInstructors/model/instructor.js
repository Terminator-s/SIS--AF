const mongoose = require('mongoose');


const instructorSchema= mongoose.Schema({
    code: {
        type: String,
        unique:true
    },
    name: {
        type: String
    },
    username: {
        type: String,
    },
    password: {
        type: String
    },
    designation: {
        type: String
    },
    faculty: {
        type: String
    }

});

module.exports=mongoose.model('Instructor',instructorSchema);