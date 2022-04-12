const bodyparser= require('body-parser')
const db = require('../../config/db/index')
const Certificate = require('../models/certifiModel')
class guestController {
    
    guest_page(req, res, next){
        res.render('guest');
    }
    getvaljson(req, res, next){
        var code = req.params.code;
        Certificate.findOne({'code': code })
        .then(certificates => res.send(certificates))
        .catch(next);
    }
}
module.exports = new guestController;