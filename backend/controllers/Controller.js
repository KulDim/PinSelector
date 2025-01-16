const modelsMicrocontrollers = require("../models/microcontrollers");

class TypeController {
    async addMicrocontroller(req, res) {
        try {
            modelsMicrocontrollers.create({
                title: req.body.title,
                pins: req.body.pins,
                counter: req.body.pins.length,
                datasheet: req.body.datasheet,
                description: req.body.description,
            });

            return res.json({ message: "Успех", status: 200 });
        } catch {
            return res.json({ message: "не Успех", status: 200 });
        }
    }

    async searchMicrocontroller(req, res) {

        console.log(req.body)

        let quantity = req.body.quantity
        let pins = req.body.pins

        let microcontrollers = await modelsMicrocontrollers.findAll({
            where: {
                counter: quantity,
            },
        });

        let searchMicrocontrollerChek = false;


        microcontrollers.forEach(microcontroller => {

            let microcontrollersCheck = []

            pins.forEach(searchPin => {
                microcontroller.pins.forEach(pinMicrocontroller => {
                    if(searchPin.output == pinMicrocontroller.id){

                        console.log(pinMicrocontroller)
                        
                        let nameMicrocontrollers = pinMicrocontroller.name.split(',')

                        if(nameMicrocontrollers.length == 1){
                            if(searchPin.value.toUpperCase() == pinMicrocontroller.name)
                            {
                                microcontrollersCheck.push({output: pinMicrocontroller.id, check: true})    
                                console.log(pinMicrocontroller.name)
                            }
                        }else{
                            nameMicrocontrollers.forEach(nameMicrocontroller => {
                                if(searchPin.value.toUpperCase() == nameMicrocontroller)
                                {
                                    microcontrollersCheck.push({output: pinMicrocontroller.id, check: true})  
                                    console.log(nameMicrocontroller)
                                }
                            })
                        }
                    }
                })
            })


            if(microcontrollersCheck.length === pins.length)
            {
                console.log("microcontrollersCheck")
                console.log(microcontrollersCheck)
            }else{
                // !скип
            }
            // PUSH НУЖНО ТУТ СДЕЛАТЬ ПРОВЕРКУ ЕСЛИ СОВПОДЕНИЕ ЕСТЬ ТО СОХРАНИТЬ ДЛЯ ОТПРАВКИ ЕСЛИ НЕТУ НО СЛЕДУШИЙ ПРОВЕРИТЬ
        })
        


        return res.json({ message: microcontrollers, status: 200 });
    }

    async detailsMicrocontroller(req, res) {
        const id = req.body.id;
        let microcontrollers = await modelsMicrocontrollers.findOne({
            where: {
                id: id,
            },
        });
        return res.json({ message: microcontrollers, status: 200 });
    }
}

module.exports = new TypeController();
