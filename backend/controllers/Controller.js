const modelsMicrocontrollers = require("../models/microcontrollers");

class TypeController {
    async addMicrocontroller(req, res) {

        try{
            modelsMicrocontrollers.create({
                title: req.body.title,
                pins: req.body.pins,
                counter: req.body.pins.length,
                datasheet: req.body.datasheet,
                description: req.body.description,
            });
    
            return res.json({ message: "Успех", status: 200 });
        }catch{
            return res.json({ message: "не Успех", status: 200 });

        }
    }

    async searchMicrocontroller(req, res) {
        console.log(req.body)
        let microcontrollers = await modelsMicrocontrollers.findAll()
        console.log(microcontrollers)
        return res.json({ message: microcontrollers, status: 200 });
    }
}

module.exports = new TypeController();
