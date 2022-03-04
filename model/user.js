const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number
})

const user = mongoose.model('user',userScheme)

module.exports = user