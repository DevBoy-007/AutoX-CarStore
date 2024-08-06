const { adminTable } = require("./Schemas/admin"); // model
module.exports = {
    Adsignfunction: async (body) => {
        try {
            console.log(body);
            const Adsignresponse = await adminTable.create(body);
            return {
                response: "Admin has registered",
            }
        } catch (error) {
            return {
                error: error.message,

            }
        }
    },
}