const express = require("express");
// const stu_managerController = require("../app/controllers/stu_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const point_managerController = require("../../app/controllers/adminController/point_managerController");
const router = express.Router();
// const student = require("../app/service/reden");
router.get('/admin/point_manager', point_managerController.point_manager);
// router.get('/addpoint', point_managerController.addpoint);
router.get('/admin/editpoint/:masv', point_managerController.editpoint);
// router.get('/detail/:id', stu_managerController.detail);
router.put('/admin/editpoint/:masv', point_managerController.updatepoint);
router.delete('/admin/point_manager/:masv', point_managerController.destroy);
// router.post('/store', stu_managerController.store);
// router.get('/getstujson/:id', stu_managerController.getstujson);


module.exports = router;