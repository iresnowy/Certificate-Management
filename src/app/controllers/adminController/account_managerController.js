const Student = require('../../models/stuModel')
const Point = require('../../models/pointModel')
const { mutipleMongooseToObject } = require('../../../util/mongoose')
const { mongooseToObject } = require('../../../util/mongoose')
const User = require('../../models/userModel')
class account_managerController {
    show_account(req, res, next) {
        User.find({})
            .then(user => {
                user = user.map(userr => userr.toObject())
                res.render('admin/admin_home', { user });
            })
            .catch(next);
    }

    delete(req, res, next) {
        //confirm('Bạn chắc chắn muốn xóa tài khoản này ???');

        const id = req.params.id
        User.findByIdAndDelete(id, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Deleted : ", docs);
            }
            res.redirect('/admin/home')
        })

    }

    create(req, res, next) {
        if (!req.body) {
            res.status(400).send({ message: "Không thể để trống" });
            return;
        }
        const user = new User({
            account_id: req.body.account_id,
            name: req.body.name,
            gender: req.body.gender,
            birthday: req.body.birthday,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password,
            position: req.body.position
        })
        user
            .save(user)
            .then(data => {
                //res.send(data)
                res.redirect('/admin/home');
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error"
                });
            });
    }

    update(req, res, next) {
        res.render('login');
    }
    show_account_by_id(req, res, next) {
        const id = req.params.id
        User.findById(id)
            .then(user => {
                userbyid = user.map(userrid => userrid.toObject())
                //res.render('admin_home',{userbyid});
                console.log(userbyid)
            })
            .catch(next);
    }

    detail(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('/admin/home', {
                user: mongooseToObject(user)
            }))
            .catch(next);
    }

    getaccjson(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.send(user))
            .catch(next);
    }
}
module.exports = new account_managerController;
