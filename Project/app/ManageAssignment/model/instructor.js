const mongoose = require('mongoose');


const instructorSchema= mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    code:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }


});

module.exports=mongoose.model('Instructor',instructorSchema);