const express = require("express");
const sequelize = require("./contexts/DatabaseContext");
const routers = require("./routes/routes");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/", routers);

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection was established successfully with database");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.error(error);
    }
})();
