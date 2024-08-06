const { login_Function } = require("../Service/login"); // controller
const joi = require("joi");

const login_validation = joi.object().keys({
  Name: joi.string().required(),
  Email: joi.string().email().required(),
  Password: joi.string().required(),
});
module.exports = {
  login_Function: async (req, res) => {
    try {
      const validate = await login_validation.validateAsync(req.body);
      const login_Response = await login_Function(validate);

      if (login_Response.error) {
        return res.send({
          error: login_Response.error,
        });
      }
      //===================================Cookie=================================
      res.cookie("Token", login_Response.response, {
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
        httpOnly: false, // Accessible via client-side JavaScript
        secure: false, // Ensure secure cookies in production
      });

      //==========================================================================
      return res.send({
        response: login_Response.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
