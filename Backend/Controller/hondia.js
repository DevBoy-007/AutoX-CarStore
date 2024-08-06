const { submit_Car } = require("../Service/hondia"); // Hondia controller
const { display_Car } = require("../Service/hondia");
const { update_Car } = require("../Service/hondia");
const { delete_Car } = require("../Service/hondia");
const joi = require("joi"); // import joi object from joi module
const submitvalidationschema = joi.object().keys({
  Vin: joi.string().required(),
  Url: joi.string().required(),
  Make: joi.string().required(),
  Model: joi.string().required(),
  Year: joi.string().required(),
  Body: joi.string().required(),
  Color: joi.string().required(),
  Fuel: joi.string().required(),
  Price: joi.string().required(),
});
module.exports = {
  submit_Car: async (req, res) => {
    try {
      const { Vin, Make, Model, Year, Body, Color, Fuel, Price } = req.body;
      // Handle file upload logic here
      const imageUrl = req.file ? req.file.path : "";
      const Car = {
        Vin,
        Url: imageUrl,
        Make,
        Model,
        Year,
        Body,
        Color,
        Fuel,
        Price,
      };
      console.log(Car, "Hyndai car ");
      const validate = await submitvalidationschema.validateAsync(Car);
      const submitresponse = await submit_Car(validate);
      if (submitresponse.error) {
        return res.send({
          error: submitresponse.error,
        });
      }
      return res.send({
        response: submitresponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  display_Car: async (req, res) => {
    try {
      const displayresponse = await display_Car();
      if (displayresponse.error) {
        return res.send({
          response: displayresponse.error,
        });
      }
      return res.send({
        response: displayresponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  update_Car: async (req, res) => {
    try {
      const { Vin, Make, Model, Year, Body, Color, Fuel, Price } = req.body;
      // Handle file upload logic here
      const imageUrl = req.file ? req.file.path : "";
      const Car = {
        Vin,
        Url: imageUrl,
        Make,
        Model,
        Year,
        Body,
        Color,
        Fuel,
        Price,
      };
      const updateresponse = await update_Car(Car);
      if (updateresponse.error) {
        return res.send({
          error: updateresponse.error,
        });
      }
      return res.send({
        response: updateresponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  delete_Car: async (req, res) => {
    try {
      const deleteresponse = await delete_Car(req.query);
      if (deleteresponse.error) {
        return res.send({
          error: deleteresponse.error,
        });
      }
      return res.send({
        response: deleteresponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
