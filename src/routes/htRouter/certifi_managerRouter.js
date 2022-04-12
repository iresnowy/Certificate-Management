const express = require("express");
const certifi_managerController = require("../../app/controllers/htController/certifi_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/hieutruong/certifi_manager', certifi_managerController.certifi_mananger);
router.get('/hieutruong/detail/:id', certifi_managerController.detail);
router.get('/hieutruong/editcer/:masv', certifi_managerController.editcer);
router.put('/hieutruong/editcer/:masv', certifi_managerController.update);
router.delete('/hieutruong/certifi_manager/:masv', certifi_managerController.destroy);
// router.post('/admin/store', certifi_managerController.store);
router.get('/hieutruong/getcertifijson/:id', certifi_managerController.getcertifijson);


module.exports = router;