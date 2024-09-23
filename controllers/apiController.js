
class TypeController {
    async test(req, res) {
        return res.json({ message: "test data" });
    }
}

module.exports = new TypeController();