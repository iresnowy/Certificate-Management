const express = require("express")
const account= require('../../app/controllers/adminController/account_managerController')
const router = express.Router();

router.get("/admin/home", account.show_account);
router.get('/admin/:id/delete', account.delete);
router.post('/admin/account/create', account.create)
router.post('/admin/:id/create', account.update)



module.exports = router;