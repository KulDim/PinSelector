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
        let microcontrollers = await modelsMicrocontrollers.findAll()
        return res.json({ message: microcontrollers, status: 200 });
    }

    async detailsMicrocontroller(req, res) {
        const id = req.body.id
        let microcontrollers = await modelsMicrocontrollers.findOne({
            where: {
                id: id,
            }
        })
        return res.json({ message: microcontrollers, status: 200 });
    }
}

module.exports = new TypeController();
