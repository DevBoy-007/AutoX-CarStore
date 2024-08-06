const { Adsignfunction } = require("../Service/register"); // controller
const joi = require("joi");
const Adloginvalidation = joi.object().keys({
    id_Card: joi.string().required(),
    first_Name: joi.string().required(),
    last_Name: joi.string().required(),
    email: joi.string().required(),
    cell_Phone: joi.string().required(),
    city: joi.string().required(),
    address: joi.string().required(),
    gendre: joi.string().required(),
    occupation: joi.string().required(),
    age: joi.string().required(),
    purpose: joi.string().required(),
    driving_License: joi.string().required(),
});
module.exports = {
    register_Function: async (req, res) => {
        try {

            const validate = await Adloginvalidation.validateAsync(req.body);
            const Adloginresponse = await Adsignfunction(validate);
            if (Adloginresponse.error) {
                return res.send({
                    error: Adloginresponse.error,
                }
                )
            }
            return res.send({
                response: Adloginresponse.response
            })

        }
        catch (error) {
            return res.send({
                error: error.message
            }
            )

        }
    }
}
