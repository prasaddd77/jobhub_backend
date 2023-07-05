const router = require("express").Router();
const authController = require("../controllers/authContoller");

// Registration
router.post("/register", authController.createUser);

// Login
router.post("/login", authController.loginUser);




module.exports = router