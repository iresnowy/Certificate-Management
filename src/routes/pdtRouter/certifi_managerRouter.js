const express = require("express");
const certifi_managerController = require("../../app/controllers/pdtController/certifi_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/phongdaotao/certifi_manager', certifi_managerController.certifi_mananger);
router.get('/phongdaotao/detail/:id', certifi_managerController.detail);
router.get('/phongdaotao/editcer/:masv', certifi_managerController.editcer);
router.put('/phongdaotao/editcer/:masv', certifi_managerController.update);
router.delete('/phongdaotao/certifi_manager/:masv', certifi_managerController.destroy);
// router.post('/phongdaotao/store', certifi_managerController.store);
router.get('/phongdaotao/getcertifijson/:id', certifi_managerController.getcertifijson);


module.exports = router;