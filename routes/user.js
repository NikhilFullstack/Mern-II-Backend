const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");

router.post("/create", createUser);
router.get("/getall", getUser);



module.exports = router;
