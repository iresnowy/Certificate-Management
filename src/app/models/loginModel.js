const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const login = new Schema({
    email: { type: String, default: ''},
    password: { type: String, default: ''},

   
    
}, { collection: 'account' })

// login.index({ first: 1, last: -1 }) Nơi đánh index
module.exports = mongoose.model('account', login)