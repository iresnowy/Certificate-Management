const express = require("express");
const updatelistController = require("../../app/controllers/adminController/updatelistController");
// const stu_add = require("../app/controllers/stu_add.js")
const router = express.Router();
// const student = require("../app/service/reden");

router.get('/admin/updatelist', updatelistController.show_list);
// router.get('/admin/detail/:id', waitcertifi_managerController.detail);
// router.get('/admin/editwaitcer/:masv', waitcertifi_managerController.editwaitcer);
// router.put('/admin/editwaitcer/:masv', waitcertifi_managerController.update);
// router.delete('/admin/waitcertifi_manager/:masv', waitcertifi_managerController.destroy);
// // router.post('/admin/store', waitcertifi_managerController.store);
 router.get('/admin/getupdatecertifijson/:id', updatelistController.getupdatecertifijson);


module.exports = router;