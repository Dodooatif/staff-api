const express = require("express")
const { createStaff, getAllStaff, getSingleStaff,updateStaff,deleteStaff } = require("../controller/staffController")


const router = express.Router()


router.route("/").post(createStaff).get(getAllStaff);
router.route("/:staffId").get(getSingleStaff).put(updateStaff).delete(deleteStaff)

module.exports = router;