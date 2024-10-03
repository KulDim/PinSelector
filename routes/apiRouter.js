const Router = require("express");
const router = new Router();
const apiController = require("../controllers/apiController");

router.post("/", apiController.test);
router.get("/", apiController.test);

module.exports = router;