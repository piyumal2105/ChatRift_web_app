const { register, login } = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar", setAvatar);

module.exports = router;
