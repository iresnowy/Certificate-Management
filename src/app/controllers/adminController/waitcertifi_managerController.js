const bodyparser = require('body-parser')
const db = require('../../../config/db/index')
const Student = require('../../models/stuModel')
const Certificate = require('../../models/certifiModel')
const Point = require('../../models/pointModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')
const { mongooseToObject } = require('../../../util/mongoose')
class waitcertifi_managerController {
    // GET student manager
    waitcertifi_mananger(req, res, next) {
        Certificate.find({'code': null } )
            .then(certificates => {
                res.render('admin/waitcertifi_manager', {
                    certificates: mutipleMongooseToObject(certificates)
                });
            })
            .catch(next);
    }
    
    editwaitcer(req, res, next) {
        var masv = req.params.masv;
        Certificate.findOne({ 'masv': masv })
            .then(certificates => res.render('admin/editwaitcer', {
                certificates: mongooseToObject(certificates)
            }))
            .catch(next);


    }

    getcertifijson(req, res, next) {
        Certificate.findById(req.params.id)
            .then(certificates => res.send(certificates))
            .catch(next);
    }



    update(req, res, next) {
        var masv = req.params.masv;
        Promise.all([Student.updateOne({ 'masv': masv }, req.body), Point.updateOne({ 'masv': masv }, req.body), Certificate.updateOne({ 'masv': masv }, req.body)])
             .then(setTimeout(certificates => res.redirect('/admin/waitcertifi_manager'),3000))
            .catch(next);
    }
    // destroy(req, res, next){
    //     Student.deleteOne({ _id: req.params.id})
    //         .then(students => res.redirect('back'))
    //         .catch(next);
    // }
    destroy(req, res, next) {
        var masv = req.params.masv;
        Promise.all([Student.deleteOne({ 'masv': masv }), Point.deleteOne({ 'masv': masv }), Certificate.deleteOne({ 'masv': masv })])
            .then((students, point, certificates) => res.redirect('back'))

            .catch(next);
    }
    detail(req, res, next) {
        Student.findById(req.params.id)
            .then(students => res.render('/admin/waitcertifi_mananger', {
                students: mongooseToObject(students)
            }))
            .catch(next);
    }
}
module.exports = new waitcertifi_managerController;