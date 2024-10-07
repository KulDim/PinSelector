const modelsMicrocontrollers = require("../models/microcontrollers");

class TypeController {
    async addMicrocontroller(req, res) {

        modelsMicrocontrollers.create({
            title: req.body.title,
            pins: req.body.pins,
            counter: req.body.pins.length,
            datasheet: req.body.datasheet,
            description: req.body.description,
        });

        return res.json({ message: "Успех", status: 200 });
    }
}

module.exports = new TypeController();
