const express = require("express");
const waitcertifi_managerController = require("../../app/controllers/htController/waitcertifi_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/hieutruong/waitcertifi_manager', waitcertifi_managerController.waitcertifi_mananger);
router.get('/admhieutruongin/detail/:id', waitcertifi_managerController.detail);
router.get('/hieutruong/editwaitcer/:masv', waitcertifi_managerController.editwaitcer);
router.put('/hieutruong/editwaitcer/:masv', waitcertifi_managerController.update);
router.delete('/hieutruong/waitcertifi_manager/:masv', waitcertifi_managerController.destroy);
// router.post('/admin/store', waitcertifi_managerController.store);
router.get('/hieutruong/getcertifijson/:id', waitcertifi_managerController.getcertifijson);


module.exports = router;