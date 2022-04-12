
const express = require("express");
const stu_managerController = require("../../app/controllers/adminController/stu_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/admin/stu_manager', stu_managerController.stu_manager);
router.get('/admin/addstu', stu_managerController.addstu);
router.get('/admin/detail/:id', stu_managerController.detail);
router.get('/admin/editstu/:masv', stu_managerController.editstu);
router.put('/admin/editstu/:masv', stu_managerController.update);
router.delete('/admin/stu_manager/:masv', stu_managerController.destroy);
router.post('/admin/store', stu_managerController.store);
router.get('/admin/getstujson/:id', stu_managerController.getstujson);


module.exports = router;