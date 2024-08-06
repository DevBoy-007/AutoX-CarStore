const { hondaTable } = require("../Model/Schemas/honda"); // model
module.exports = {
  submit_Car: async (body) => {
    try {
      const submitresponse = await hondaTable.create(body)//cloning  
      return {
        response: " Honda Car has submitted !"
      }
    }
    catch (error) {
      return {
        error: error.message
      }
    }
  },
  display_Car: async () => {
    try {
      const displayresponse = await hondaTable.find();
      console.log(displayresponse);
      return {
        response: displayresponse
      }
    }
    catch (error) {
      return {
        error: error.message
      }
    }
  },
  update_Car: async (body) => {
    try {
      const updateresponse = await hondaTable.findOneAndUpdate(body.Vin, { Price: body.Price });
      return {
        response: " Honda Car has updated",
      }
    }
    catch (error) {
      return {
        error: "model"
      }
    }

  },

  delete_Car: async (Vin) => {
    try {
      const deleteresponse = await hondaTable.findOneAndDelete({ Vin: Vin });
      return {
        response: `Given Honda Car has deleted !`
      }
    }
    catch (error) {
      return {
        error: error.message,
      }
    }
  },
  check: async (Vin) => {
    try {
      const checkresponse = await hondaTable.findOne({ Vin: Vin });
      return {
        response: checkresponse[0].Vin
      }
    }
    catch (error) {
      return {
        error: "model"
      }
    }

  },

};