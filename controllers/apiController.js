
class TypeController {
    async addMicrocontroller(req, res) {
        console.log(req.body)

        


        return res.json({message: "Успех", status: 200});
    }
}

module.exports = new TypeController();