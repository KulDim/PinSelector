const Router = require("express");
const router = new Router();
const apiController = require("../controllers/apiController");

router.get("/", apiController.test);

module.exports = router;