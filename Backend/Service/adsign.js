const { Adsignfunction } = require("../Model/adsign");
const { hash } = require("bcryptjs");
module.exports = {
    Adsignfunction: async (body) => {
        const admin = {
            Name: body.Name,
            Email: body.Email,
            Password: await hash(body.Password, 5),
        }
        try {

            const Adsignresponse = await Adsignfunction(admin);
            if (Adsignresponse.error) {
                return {
                    error: Adsignresponse.error,
                }
            }
            return {
                response: Adsignresponse.response
            }
        }
        catch (error) {
            return {
                error: "service"
            }

        }
    }
}