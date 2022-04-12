const express = require("express")
const loginController= require('../app/controllers/loginController')
const router = express.Router();

router.get("/signin", loginController.login_home);
router.post('/login', loginController.check_login);
//router.get("/admin/home", loginController.admin_home);


module.exports = router;