const { signup_Function } = require("../Model/Signup"); // service
const { hash } = require("bcryptjs");
module.exports = {
    signup_Function: async (body) => {
        const user = {
            Name: body.Name,
            Id_Card: body.Id_Card,
            Email: body.Email,
            Password: await hash(body.Password, 5),
            Cell_Phone: body.Cell_Phone,
            City: body.City,
            Address: body.Address,
            Gendre: body.Gendre,
            Occupation: body.Occupation,
            Age: body.Age,
            TNT: body.TNT,
            Driving_License: body.Driving_License
        }
        try {
            const sign_Response = await signup_Function(user);
            if (sign_Response.error) {
                return {
                    error: sign_Response.error,
                }
            }
            return {
                response: sign_Response.response
            }
        }
        catch (error) {
            return {
                error: "service"
            }

        }
    }
}