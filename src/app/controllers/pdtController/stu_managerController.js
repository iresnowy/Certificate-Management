const bodyparser = require('body-parser')
const db = require('../../../config/db/index')
const Student = require('../../models/stuModel')
const Point = require('../../models/pointModel')
const Certificate = require('../../models/certifiModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')
const { mongooseToObject } = require('../../../util/mongoose')
class stu_managerController {
    // GET student manager
    stu_manager(req, res, next) {
        Student.find({})
            .then(students => {

                res.render('phongdaotao/stu_manager', {
                    students: mutipleMongooseToObject(students)
                });
            })
            .catch(next);
    }
    addstu(req, res, next) {
        res.render('phongdaotao/addstu');
    }
    store(req, res, next) {
        const student = new Student(req.body);
        student.save(function (err) {
            if (err) console.log(err);
            // else res.redirect('stu_manager');
        });
        const certificate = new Certificate();
        certificate.masv = req.body.masv;
        certificate.name = req.body.name;
        certificate.birday = req.body.birday;
        certificate.nganh = req.body.nganh;
        certificate.hinhthucdt = req.body.hinhthucdt;
        certificate.trinhdodt = req.body.trinhdodt;
        certificate.save(function (err) {
            if (err) console.log(err);
            // else res.redirect('stu_manager');
        });
        const point = new Point();
        point.masv = req.body.masv;
        point.name = req.body.name;
        point.save(function (err) {
            if (err) console.log(err);
            else res.redirect('/phongdaotao/stu_manager');
        });
    }
    // index(req, res, next){
    editstu(req, res, next) {
        var masv = req.params.masv;
        Student.findOne({ 'masv': masv })
            .then(students => res.render('phongdaotao/editstu', {
                students: mongooseToObject(students)
            }))
            .catch(next);
    }

    getstujson(req, res, next) {
        Student.findById(req.params.id)
            .then(students => res.send(students))
            .catch(next);
    }


    update(req, res, next) {
        var masv = req.params.masv;
        Promise.all([Student.updateOne({ 'masv': masv }, req.body), Point.updateOne({ 'masv': masv }, req.body), Certificate.updateOne({ 'masv': masv }, req.body)])
            .then(students => res.redirect('/phongdaotao/stu_manager'))
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
            .then(students => res.render('/phongdaotao/stu_manager', {
                students: mongooseToObject(students)
            }))
            .catch(next);
    }
}
module.exports = new stu_managerController;