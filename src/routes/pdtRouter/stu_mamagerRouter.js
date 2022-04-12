
const express = require("express");
const stu_managerController = require("../../app/controllers/pdtController/stu_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/phongdaotao/stu_manager', stu_managerController.stu_manager);
router.get('/phongdaotao/addstu', stu_managerController.addstu);
router.get('/phongdaotao/detail/:id', stu_managerController.detail);
router.get('/phongdaotao/editstu/:masv', stu_managerController.editstu);
router.put('/phongdaotao/editstu/:masv', stu_managerController.update);
router.delete('/phongdaotao/stu_manager/:masv', stu_managerController.destroy);
router.post('/phongdaotao/store', stu_managerController.store);
router.get('/phongdaotao/getstujson/:id', stu_managerController.getstujson);

module.exports = router;