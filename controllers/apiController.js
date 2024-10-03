
class TypeController {
    async test(req, res) {
        console.log(req.body)
        return res.json({ message: "test data" });
    }
}

module.exports = new TypeController();