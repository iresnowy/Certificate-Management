const bodyparser = require('body-parser')
const db = require('../../../config/db/index')
const Student = require('../../models/stuModel')
const Certificate = require('../../models/certifiModel')
const Point = require('../../models/pointModel')
const UpdateList= require('../../models/updateModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')
const { mongooseToObject } = require('../../../util/mongoose')
class certifi_managerController {
    // GET student manager
    certifi_mananger(req, res, next) {
        Certificate.find({ 'code': { $exists: true,} })
            .then(certificates => {
                certificates.sort((a,b)=>(a.codecb/10>b.codecb/10)?1:-1)
                res.render('admin/certifi_manager', {
                    certificates: mutipleMongooseToObject(certificates)
                });
            })
            .catch(next);
    }
    
    editcer(req, res, next) {
        var masv = req.params.masv;
        Certificate.findOne({ 'masv': masv })
            .then(certificates => res.render('admin/editcer', {
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
        const d= new Date()
        var timeUpdate= Date()
        const user = new UpdateList({
            masv : req.body.masv ,
            code : req.body.code,
            title : req.body.title,
            name :req.body.name,
            codecb : "1",
            birday : req.body.birday,
            nganh : req.body.nganh,
            hinhthucdt : req.body.hinhthucdt,
            trinhdodt : req.body.trinhdodt,
            xeploai : req.body.xeploai,
            grayear: req.body.grayear,
            ngayph:req.body.ngayph,
            author: req.body.author,
            updater: req.body.updater,
            ngaycn:timeUpdate,
            status: req.body.status,
            ngaytao: req.body.ngaytao
        })
        user
            .save(user)
        Promise.all([Student.updateOne({ 'masv': masv }, req.body), Point.updateOne({ 'masv': masv }, req.body), Certificate.updateOne({ 'masv': masv }, req.body)])
             .then(setTimeout(certificates => res.redirect('/admin/certifi_manager'),3000))
            .catch(next);
    }
    
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
module.exports = new certifi_managerController;