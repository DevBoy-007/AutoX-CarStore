const { Adsignfunction } = require("../Service/adsign"); // controller
const joi = require("joi");
const Adsignvalidation = joi.object().keys({
  Name: joi.string().required(),
  Email: joi.string().required(),
  Password: joi.string().required(),
});
module.exports = {
  Adsignfunction: async (req, res) => {
    try {
      const validate = await Adsignvalidation.validateAsync(req.body);
      const Adsignresponse = await Adsignfunction(validate);
      if (Adsignresponse.error) {
        return res.send({
          error: Adsignresponse.error,
        });
      }
      return res.send({
        response: Adsignresponse.response,
      });
    } catch (error) {
      return res.send({
        error: "controller",
      });
    }
  },
};
