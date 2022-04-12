const bodyparser= require('body-parser')
const db = require('../../../config/db/index')
const Student = require('../../models/stuModel')
const Certificate = require('../../models/certifiModel')
const Point = require('../../models/pointModel')
const {mutipleMongooseToObject} = require('../../../util/mongoose')
const {mongooseToObject}  = require('../../../util/mongoose')
class point_managerController {
    // GET student manager
    point_manager(req, res, next){
        Point.find({})
            .then(points => {
               
                res.render('phongdaotao/point_manager',{
                    points: mutipleMongooseToObject(points)
                });
            })
            .catch(next);
    }
    
    editpoint(req, res, next){
        var masv = req.params.masv;
        Point.findOne({ 'masv': masv })
            .then(points => res.render('phongdaotao/editpoint',{
                points: mongooseToObject(points)
            }))
            .catch(next);
    }

    // getstujson(req, res, next){
    //     Student.findById(req.params.id)
    //         .then(students => res.send(students))
    //         .catch(next);
    // }
    


    updatepoint(req, res, next){
        var masv = req.params.masv;
        Promise.all([ Student.updateOne({ 'masv': masv }, req.body),Point.updateOne({ 'masv': masv}, req.body), Certificate.updateOne({ 'masv': masv}, req.body)])
            .then(points => res.redirect('/phongdaotao/point_manager'))
            .catch(next);
    }
    destroy(req, res, next){
        var masv = req.params.masv;
        Promise.all([ Student.deleteOne({ 'masv': masv }),Point.deleteOne({ 'masv': masv}), Certificate.deleteOne({ 'masv': masv})])
        .then((students,point,certificates) => res.redirect('back'))
       
        .catch(next);
    }
    // detail(req, res, next){
    //     Student.findById(req.params.id)
    //         .then(students => res.render('/stu_manager',{
    //             students: mongooseToObject(students)
    //         }))
    //         .catch(next);
    // }
}
module.exports = new point_managerController;