const Router = require("express");
const router = new Router();

const Controller = require("../controllers/Controller");

router.post("/addMicrocontroller", Controller.addMicrocontroller);
router.post("/searchMicrocontroller", Controller.searchMicrocontroller);

router.post("/detailsMicrocontroller", Controller.detailsMicrocontroller);
router.get("/detailsMicrocontroller", Controller.detailsMicrocontroller);

module.exports = router;
