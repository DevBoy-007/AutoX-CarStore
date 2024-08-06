const { Adloginfunction } = require("../Service/adlogin"); // controller
const joi = require("joi");
const Adloginvalidation = joi.object().keys({
  Name: joi.string().required(),
  Email: joi.string().required(),
  Password: joi.string().required(),
});
module.exports = {
  Adloginfunction: async (req, res) => {
    try {
      const validate = await Adloginvalidation.validateAsync(req.body);
      const Adloginresponse = await Adloginfunction(validate);
      if (Adloginresponse.error) {
        return res.send({
          error: Adloginresponse.error,
        });
      }
      //================================Cookie===============================
      res.cookie("AdminToken", Adloginresponse.response, {
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days,
        httpOnly: false, // cookie is going to browser Store
      });
      //======================================================================
      return res.send({
        response: Adloginresponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
