const { adminTable } = require("./Schemas/admin"); // schemas
module.exports = {
    Adloginfunction: async (body) => {

        try {
            const Adloginresponse = await adminTable.findOne({ Email: body.Email });
            console.log(Adloginresponse);
            return {
                response: Adloginresponse
            }

        } catch (error) {
            return {
                error: error.message,

            }
        }
    },
}