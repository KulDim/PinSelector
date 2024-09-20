
class TypeController {
    async test(req, res) {
        console.log("12")
        return res.json({ message: "курить пошли, хорошо" });
    }
}

module.exports = new TypeController();