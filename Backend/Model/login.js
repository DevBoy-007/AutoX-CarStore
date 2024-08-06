const { customerTable } = require("./Schemas/customer"); // schemas
module.exports = {
    login_Function: async (body) => {

        try {
            const login_Response = await customerTable.findOne({ Email: body.Email });
            return {
                response: login_Response
            }

        } catch (error) {
            return {
                error: error.message,

            }
        }
    },
}