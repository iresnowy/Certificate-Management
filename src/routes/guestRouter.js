const express = require("express")
const guestController= require('../app/controllers/guestController')
const router = express.Router();

router.get("/", guestController.guest_page);
router.get('/getvaljson/:code', guestController.getvaljson);


module.exports = router;