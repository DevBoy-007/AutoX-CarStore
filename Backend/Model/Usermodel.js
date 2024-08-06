const { hondaTable } = require("./Schemas/honda"); // model

module.exports = {
  Adsignfunction: async (body) => {
    try {
      console.log(body);
      const Adsignresponse = await hondaTable.create(body);
      return {
        response: "Car has registered",
      }
    } catch (error) {
      return {
        error: error.message,

      }
    }
  },
  getFunction: async () => {


    try {
      const Adsignresponse = await hondaTable.find();
      return {
        response: Adsignresponse,
      }
    } catch (error) {
      return {
        error: "Model error",
        details: error.message
      }
    }
  },
  updateFunction: async (body) => {
    console.log(body)

    try {
      const Adsignresponse = await hondaTable.findByIdAndUpdate(body.Id, { Price: body.Price });
      return {
        response: "Data Has Updated",
      }
    } catch (error) {
      return {
        error: error.message
      }
    }
  },
  deleteFunction: async (id) => {
    try {
      const Adsignresponse = await hondaTable.findByIdAndDelete(id);
      return {
        response: "Car Has Delete",
      }
    } catch (error) {
      return {
        error: error.message
      }

    }
  }


}
