
const express = require("express");
const stu_managerController = require("../../app/controllers/htController/stu_managerController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/hieutruong/stu_manager', stu_managerController.stu_manager);
router.get('/hieutruong/getstujson/:id', stu_managerController.getstujson);


module.exports = router;