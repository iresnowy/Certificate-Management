const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    account_id:  String,
    name:  String,
    email:  String,
    birthday:  String,
    gender:  String,
    phone:  String,
    address:  String,
    position:  {type: String, default: "user",
    enum: ['1' ,'2', '3' ]},
    password: String
    
}, { collection: 'users' })

users.index({ account_id: 1}) //Nơi đánh index
module.exports = mongoose.model('users', users)