const { cartTable } = require("../Model/Schemas/cart")
module.exports = {
    removeCart: async (_id) => {
        console.log(_id)
        try {
            const removeResponse = await cartTable.findByIdAndDelete(_id);
            return {
                response: "cart has deleted"
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

}
