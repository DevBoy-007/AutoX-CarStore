const { Adsignfunction } = require("../Service/Userservice"); // controller
const { getFunction } = require("../Service/Userservice"); // controller
const { updateFunction } = require("../Service/Userservice"); // controller
const { deleteFunction } = require("../Service/Userservice"); // controller
const joi = require("joi");
const Adsignvalidation = joi.object().keys({
  Vin: joi.string().required(),
  Make: joi.string().required(),
  Model: joi.string().required(),
  Year: joi.string().required(),
  Body: joi.string().required(),
  Color: joi.string().required(),
  Fuel: joi.string().required(),
  Price: joi.string().required(),
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
  getFunction: async (req, res) => {
    try {
      const Adsignresponse = await getFunction();
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

  updateFunction: async (req, res) => {
    try {
      const Adsignresponse = await updateFunction(req.body);
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

  deleteFunction: async (req, res) => {
    console.log("yes");
    try {
      const Adsignresponse = await deleteFunction(req.query);
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
