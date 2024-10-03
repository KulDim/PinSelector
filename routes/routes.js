const Router = require("express");
const router = new Router();

const apiRouter = require("./apiRouter");

router.use("/add/", apiRouter);

module.exports = router;