const { signup_Function } = require("../Service/signup"); // controller
const joi = require("joi");
const signup_validation = joi.object().keys({
    Name: joi.string().required(),
    Id_Card: joi.string().required(),
    Email: joi.string().required(),
    Password: joi.string().required(),
    Cell_Phone: joi.string().required(),
    City: joi.string().required(),
    Address: joi.string().required(),
    Gendre: joi.string().required(),
    Occupation: joi.string().required(),
    Age: joi.string().required(),
    TNT: joi.string().required(),
    Driving_License: joi.string().required(),
});
module.exports = {
    signup_Function: async (req, res) => {
        try {

            const validate = await signup_validation.validateAsync(req.body);
            const sign_Response = await signup_Function(validate);
            if (sign_Response.error) {
                return res.send({
                    error: sign_Response.error,
                }
                )
            }
            return res.send({
                response: sign_Response.response
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
