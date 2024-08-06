const { displayCart } = require("../Model/cart-display")
module.exports = {
    displayCart: async () => {
        try {
            const displayResponse = await displayCart()
            console.log(displayResponse)
            if (displayResponse.error) {
                return {
                    response: displayResponse.error,
                }
            }
            return {
                response: displayResponse.response
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

}
