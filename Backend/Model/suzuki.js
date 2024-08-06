const { suzukiTable } = require("../Model/Schemas/suzuki"); // Hondia model
module.exports = {
    submit_Car: async (body) => {
        try {
            const submitresponse = await suzukiTable.create(body)//cloning  
            return {
                response: " Suzuki Car has submitted !"
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
            const displayresponse = await suzukiTable.find();
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
            const updateresponse = await suzukiTable.findOneAndUpdate(body.Vin, { Price: body.Price });
            return {
                response: " Suzuki Car has updated",
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },

    delete_Car: async (Vin) => {
        try {
            const deleteresponse = await suzukiTable.findOneAndDelete({ Vin: Vin });
            return {
                response: `Given Suzuki Car has deleted !`
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
            const checkresponse = await suzukiTable.findOne({ Vin: Vin });
            return {
                response: checkresponse.Vin
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },

};