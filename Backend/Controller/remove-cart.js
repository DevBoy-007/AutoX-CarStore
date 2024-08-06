const { removeCart } = require("../Service/remove-cart")
module.exports = {
    removeCart: async (req, res) => {
        console.log(req.query);
        try {
            const removeResponse = await removeCart(req.query)
            if (removeResponse.error) {
                return res.send({
                    response: removeResponse.error,
                })
            }
            return res.send({
                response: removeResponse.response
            })
        }
        catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

}
