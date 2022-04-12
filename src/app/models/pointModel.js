const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Point = new Schema({
    masv : {
        type : String,
        // required: true,
        // unique: true
    },
    name : {
        type : String,
        // required: true
    },
    diem : {
        type: String,
        // required: true,
        // unique: true
    },
    tctl : {
        type: String,
        // required: true,
        // unique: false
    },
    xeploai : {
        type: String,
        // required: true,
    },
    tcqp : {
        type : String,
        // required: true,
        // unique: true
    },
    tcta : {
        type : String,
        // required: true,
        // unique: true
    },
    tctc : {
        type : String,
        // required: true,
        // unique: false
    },
    hocphi : {
        type : String,
        // required: true,
        // unique: false
    },
    tinhtrang : {
        type : String,
        // required: true,
        // unique: false
    },

}, )

// const students = mongoose.model('students', students);

module.exports = mongoose.model('Point', Point);
// users.index({ email: 1}) //Nơi đánh index
// module.exports = mongoose.model('students', students)