const { Adsignfunction } = require("../Model/register"); // service
module.exports = {
    Adsignfunction: async (body) => {
        try {
            const Adsignresponse = await Adsignfunction(body);
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