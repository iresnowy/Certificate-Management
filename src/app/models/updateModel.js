const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Updatelist = new Schema({
    masv : {
        type : String,
        // required: true,
        // unique: true
    },
    code : {
        type : String,
        // required: true
    },
    title : {
        type : String,
        // required: true
    },
    name : {
        type : String,
        // required: true
    },
    codecb : {
        type : String,
        // required: true
    },
    birday : {
        type : String,
        // required: true,
        // unique: false
    },
    nganh : {
        type : String,
        // required: true,
        // unique: false
    },
    hinhthucdt : {
        type : String,
        // required: true,
        // unique: false
    },
    trinhdodt : {
        type : String,
        // required: true,
        // unique: false
    },
    xeploai : {
        type: String,
        // required: true,
    },
    grayear: {
        type: String,
        // required: true,
    },
    ngayph: {
        type: String,
        // required: true,
    },
    author: {
        type: String,
        // required: true,
    },
    updater: {
        type: String,
        // required: true,
    },
    ngaycn: {
        type: String,
        // required: true,
    },
    status: {
        type: String,
        // required: true,
    },
    ngaytao: {
        type: String,
        // required: true,
    },
}, )

// const students = mongoose.model('students', students);

module.exports = mongoose.model('updatehistory', Updatelist);
// users.index({ email: 1}) //Nơi đánh index
// module.exports = mongoose.model('students', students)