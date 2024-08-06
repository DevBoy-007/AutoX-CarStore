const { cartTable } = require("../Model/Schemas/cart")
module.exports = {
    displayCart: async () => {
        try {
            const displayResponse = await cartTable.find({}, 'car',)
            return {
                response: displayResponse
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

}
