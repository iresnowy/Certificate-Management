const express = require("express");
const waitcertifi_managerController = require("../../app/controllers/adminController/waitcertifi_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/admin/waitcertifi_manager', waitcertifi_managerController.waitcertifi_mananger);
router.get('/admin/detail/:id', waitcertifi_managerController.detail);
router.get('/admin/editwaitcer/:masv', waitcertifi_managerController.editwaitcer);
router.put('/admin/editwaitcer/:masv', waitcertifi_managerController.update);
router.delete('/admin/waitcertifi_manager/:masv', waitcertifi_managerController.destroy);
// router.post('/admin/store', waitcertifi_managerController.store);
router.get('/admin/getcertifijson/:id', waitcertifi_managerController.getcertifijson);


module.exports = router;