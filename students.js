const { strict } = require("assert")
const { error } = require("console")
const mongoose = require("mongoose")


const state_dropout = new mongoose.Schema({
    primary : {
        type:Number
    },
    upper_primary:{
       type:Number,

    },
    elementary:{
        type:Number,      
    }

})
//now a new collection 
const student= new mongoose.model("student", state_dropout)

module.exports= student