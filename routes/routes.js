const Router = require("express");
const router = new Router();

const apiRouter = require("./apiRouter");

router.use("/test/", apiRouter);

module.exports = router;