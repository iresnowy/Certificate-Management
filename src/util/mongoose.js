const bodyparser= require('body-parser')
const db = require('../config/db/index')
module.exports = {
    mutipleMongooseToObject : function(mongooseArrays){
        return mongooseArrays.map((mongooseArrays) => mongooseArrays.toObject());
    },
    mongooseToObject : function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },

}