const { customerTable } = require("./Schemas/customer"); // schemas
module.exports = {
    Adsignfunction: async (body) => {
        console.log(body)
        try {
            const Adloginresponse = await customerTable.create(body);
            console.log(Adloginresponse);
            return {
                response: "You are registered !"
            }

        } catch (error) {
            return {
                error: error.message,

            }
        }
    },
}