const { login_Function } = require("../Model/login");// model
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config()

module.exports = {
    login_Function: async (body) => {

        try {
            const login_Response = await login_Function(body);

            if (login_Response.response === null || login_Response.error) {
                return {
                    error: " Customer not register",
                }
            }
            if (body.Name != login_Response.response.Name) {
                return {
                    error: " Invalid Customer Name"
                }
            }
            const checkpassword = await
                compare(body.Password, login_Response.response.Password);
            if (checkpassword == false) {
                return {
                    error: "Invalid Password"
                }
            }

            const user = { id: login_Response.response._id, name: login_Response.response.Name, cnic: login_Response.response.Id_Card, email: login_Response.response.Email }

            const jwt = sign(user, process.env.SECRET_KEY, { expiresIn: "2D" });

            return {
                response: jwt
            }
        }
        catch (error) {
            return {
                error: error.message
            }

        }
    }
}

