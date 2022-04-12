const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    masv : {
        type : String,
        required: true,
        unique: true
    },
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    khoa : {
        type: String,
        required: true,
        // unique: false
    },
    lop : {
        type: String,
        required: true,
    },
    cmnd : {
        type : String,
        required: true,
        // unique: true
    },
    sdt : {
        type : String,
        required: true,
        unique: true
    },
    birday : {
        type : String,
        required: true,
        // unique: false
    },
    gender : {
        type : String,
        required: true,
        // unique: false
    },
    address : {
        type : String,
        required: true,
        // unique: false
    },
    nganh : {
        type : String,
        required: true,
        // unique: false
    },
    nienkhoa : {
        type : String,
        required: true,
        // unique: false
    },
    hinhthucdt : {
        type : String,
        required: true,
        // unique: false
    },
    trinhdodt : {
        type : String,
        required: true,
        // unique: false
    },

}, )

// const students = mongoose.model('students', students);

module.exports = mongoose.model('Student', Student);
// users.index({ email: 1}) //Nơi đánh index
// module.exports = mongoose.model('students', students)