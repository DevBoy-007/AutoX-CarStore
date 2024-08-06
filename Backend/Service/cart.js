const { cart_Function } = require("../Model/cart"); // service

module.exports = {
    cart_Function: async (cartnewitem) => {
    
        try {
            const cart_Response = await cart_Function(cartnewitem);
            if (cart_Response.error) {
                return {
                    error: cart_Response.error,
                }
            }
            return {
                response: cart_Response.response
            }
        }
        catch (error) {
            return {
                error: "service"
            }

        }
    }
}