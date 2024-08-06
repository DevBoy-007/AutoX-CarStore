const { cartTable } = require("./Schemas/cart"); // schemas
module.exports = {
    cart_Function: async (cartnewitem) => {
        console.log("========Model======");


        try {
            const signup_Response = await cartTable.create(cartnewitem);
            return {
                response: " Car has add to Cart !"
            }
        } catch (error) {
            return {
                error: error.message,

            }
        }
    },
}