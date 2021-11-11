const express = require("express")
const router = express.Router();

router.get("/", require("./allGet")); //o
router.get("/:id", require("./idGet")); //o
router.post("/",require("./postPost")); // o
router.put("/:id",require("./postUpdate")); //o
router.delete("/:id",require("./postDelete"));//o

module.exports = router;