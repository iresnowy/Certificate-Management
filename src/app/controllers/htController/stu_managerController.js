const Student = require('../../models/stuModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')

class stu_managerController {
    stu_manager(req, res, next) {
        Student.find({})
            .then(students => {
                res.render('hieutruong/stu_manager', {
                    students: mutipleMongooseToObject(students)
                });
            })
            .catch(next);
    }

    getstujson(req, res, next) {
        Student.findById(req.params.id)
            .then(students => res.send(students))
            .catch(next);
    }

    detail(req, res, next) {
        Student.findById(req.params.id)
            .then(students => res.render('/hieutruong/stu_manager', {
                students: mongooseToObject(students)
            }))
            .catch(next);
    }


}


module.exports = new stu_managerController;