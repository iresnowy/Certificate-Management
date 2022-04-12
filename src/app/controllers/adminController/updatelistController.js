const bodyparser = require('body-parser')
const db = require('../../../config/db/index')
const Student = require('../../models/stuModel')
const Updatelist = require('../../models/updateModel')
const Point = require('../../models/pointModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')
const { mongooseToObject } = require('../../../util/mongoose')
class updatelistController {
    // GET student manager
    show_list(req, res, next) {
        Updatelist.find({})
            .then(updates => {
                updates = updates.map(userr => userr.toObject())
                console.log(updates)
                res.render('admin/updatehistory', { updates });
            })
            .catch(next);
    }
    
   

    getupdatecertifijson(req, res, next) {
        
        Updatelist.findById(req.params.id)
            .then(certificates => res.send(certificates))
            .catch(next);
    }



   
    // destroy(req, res, next){
    //     Student.deleteOne({ _id: req.params.id})
    //         .then(students => res.redirect('back'))
    //         .catch(next);
    // }
    
    detail(req, res, next) {
        Certificate.findById(req.params.id)
            .then(certificates => res.render('/admin/updatelist', {
                certificates: mongooseToObject(certificates)
            }))
            .catch(next);
    }
}
module.exports = new updatelistController;