const { bmwTable } = require("../Model/Schemas/bmw"); // model
module.exports = {
    submit_Car: async (body) => {
        try {
            const submitresponse = await bmwTable.create(body)//cloning  
            return {
                response: " BMW Car has submitted !"
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
            const displayresponse = await bmwTable.find();
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
            const updateresponse = await bmwTable.findOneAndUpdate(body.Vin, { Price: body.Price });
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
            const deleteresponse = await bmwTable.findOneAndDelete({ Vin: Vin });
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
            const checkresponse = await bmwTable.findOne({ Vin: Vin });
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