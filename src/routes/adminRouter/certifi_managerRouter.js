const express = require("express");
const certifi_managerController = require("../../app/controllers/adminController/certifi_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/admin/certifi_manager', certifi_managerController.certifi_mananger);
router.get('/admin/detail/:id', certifi_managerController.detail);
router.get('/admin/editcer/:masv', certifi_managerController.editcer);
router.put('/admin/editcer/:masv', certifi_managerController.update);
router.delete('/admin/certifi_manager/:masv', certifi_managerController.destroy);
// router.post('/admin/store', certifi_managerController.store);
router.get('/admin/getcertifijson/:id', certifi_managerController.getcertifijson);


module.exports = router;