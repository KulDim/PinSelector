const Router = require("express");
const router = new Router();

const Controller = require("../controllers/Controller");

router.get("/addMicrocontroller", Controller.addMicrocontroller);
router.post("/addMicrocontroller", Controller.addMicrocontroller);

module.exports = router;
