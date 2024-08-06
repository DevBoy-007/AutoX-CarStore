const { cart_Function } = require("../Service/cart"); // controller
const joi = require("joi");
const cart_validation = joi.object().keys({
    customer: joi.object({
        id: joi.string().required(),
        name: joi.string().required(),
        cnic: joi.string().required(),
        email: joi.string().email().required(),
        // Add more customer details as needed
    }).required(),
    car: joi.object({
        url: joi.string().required(),
        make: joi.string().required(),
        model: joi.string().required(),
        year: joi.string().required(),
        body: joi.string().required(),
        color: joi.string().required(),
        fuel: joi.string().required(),
        price: joi.string().required(),
    }).required(),
    orderDate: joi.date().required()
});
module.exports = {
    cart_Function: async (req, res) => {
        try {
            console.log(req.body, "con");

            const { customer } = req.body;

            // Extract car information from req.body
            const { url, make, model, year, body, color, fuel, price } = req.body;
            // const imageUrl = req.file ? req.file.path : '';
            const newCartItem = {
                customer: {
                    id: customer.id,
                    name: customer.name,
                    cnic: customer.cnic,
                    email: customer.email,
                    // Add more customer details as needed
                },
                car: {
                    url,
                    make,
                    model,
                    year,
                    body,
                    color,
                    fuel,
                    price
                },
                orderDate: new Date() // You can customize this as per your requirements
            };
            const validate = await cart_validation.validateAsync(newCartItem);
            console.log(newCartItem, "validate")
            const cart_Response = await cart_Function(validate);
            if (cart_Response.error) {
                return res.send({
                    error: cart_Response.error,
                }
                )
            }
            return res.send({
                response: cart_Response.response
            })

        }
        catch (error) {
            return res.send({
                error: error.message
            }
            )

        }
    }
}
