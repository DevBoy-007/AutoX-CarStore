const { hondiaTable } = require("../Model/Schemas/hundai"); // Hondia model
module.exports = {
    submit_Car: async (body) => {
        try {
            const submitresponse = await hondiaTable.create(body)//cloning  
            return {
                response: " Hyundia Car has submitted !"
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
            const displayresponse = await hondiaTable.find();
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
            const updateresponse = await hondiaTable.findOneAndUpdate(body.Vin, { Price: body.Price });
            return {
                response: " Hyundia Car has updated",
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
            const deleteresponse = await hondiaTable.findOneAndDelete({ Vin: Vin });
            return {
                response: `Given Hyundia Car has deleted !`
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
            const checkresponse = await hondiaTable.findOne({ Vin: Vin });
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