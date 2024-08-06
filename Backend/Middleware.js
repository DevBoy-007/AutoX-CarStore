const { verify } = require("jsonwebtoken");
require("dotenv").config()
module.exports = {
    middleware: async (req, res, next) => {
        try {
            if (req.cookies.Token == undefined || req.cookies.Token == null) {
                return res.send({
                    error: "Unauthorized Customer"
                })
            }
            verify(req.cookies.Token, process.env.SECRET_KEY, (error, user) => {
                if (error) {
                    console.log(error, " secret key not match");
                    return res.send({
                        error: "Unauthorised Customer"
                    });
                }

                req.body.customer = user;
                next()
            });

        } catch (error) {
            res.send({
                error: error.message
            })
        }
    }
} 