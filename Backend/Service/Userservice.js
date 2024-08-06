const { Adsignfunction } = require("../Model/Usermodel"); // service
const { getFunction } = require("../Model/Usermodel"); // service
const { updateFunction } = require("../Model/Usermodel"); // service
const { deleteFunction } = require("../Model/Usermodel"); // service

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
    },
    getFunction: async () => {

        try {
            const Adsignresponse = await getFunction();
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
    },
    updateFunction: async (body) => {

        try {
            const Adsignresponse = await updateFunction(body);
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
    },
    deleteFunction: async (query) => {

        try {
            const Adsignresponse = await deleteFunction(query.id);
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