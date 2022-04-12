const bodyparser = require('body-parser')
const db = require('../../config/db/index')
const User = require('../models/userModel')



// Parse JSON bodies (as sent by API clients)


exports.login_home=(req, res, next) =>{
        res.render('login');
    }

    exports.check_login=(req, res,next)=>{
        var email= req.body.email
        var password=req.body.password
        User.find({})
        .then(user=>{
            user=user.map(userr=>userr.toObject())  
            let u=user.find(u=>u.email===email&&u.password===password);
            if(u){
                if(u.position==='1'){
                res.redirect('/admin/home')
                }
                if(u.position==='2'){
                res.redirect('/admin/home')
                }
                if(u.position==='3'){
                res.redirect('/admin/home')
                }
            }else{
                res.redirect('/signin')
                document.alert('Sai thong tin')
            }    
            })
        .catch(next)      
    }

    exports.admin_home=(req, res, next)=> {
        res.render('admin/admin_home');
    }

    

