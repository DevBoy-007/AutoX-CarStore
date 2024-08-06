const { displayCart } = require("../Service/cart-display");
module.exports = {
  displayCart: async (req, res) => {
    try {
      const displayResponse = await displayCart();
      if (displayResponse.error) {
        return res.send({
          response: displayResponse.error,
        });
      }
      return res.send({
        response: displayResponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
