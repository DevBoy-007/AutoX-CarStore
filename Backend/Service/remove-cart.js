const { removeCart } = require("../Model/remove-cart")
module.exports = {
    removeCart: async (query) => {
        try {
            const removeResponse = await removeCart(query._id);
            if (removeResponse.error) {
                return {
                    response: removeResponse.error,
                }
            }
            return {
                response: removeResponse.response
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

}
