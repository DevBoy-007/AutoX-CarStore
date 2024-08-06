const { Adloginfunction } = require("../Model/adlogin");// model
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  Adloginfunction: async (body) => {
    console.log(body)
    try {
      const Adloginresponse = await Adloginfunction(body);
      console.log(Adloginresponse)
      if (Adloginresponse.response === null || Adloginresponse.error) {
        return {
          error: " Admin not register",
        }
      }
      if (body.Name != Adloginresponse.response.Name) {
        return {
          error: " Invalid Admin name"
        }
      }
      const checkpassword = await
        compare(body.Password, Adloginresponse.response.Password);
      if (checkpassword == false) {
        return {
          error: "Invalid Password"
        }
      }
      const user = { id: Adloginresponse.response._id, name: Adloginresponse.response.Name, email: Adloginresponse.response.Email }
      const jwt = sign(user, process.env.SECRET_KEY, { expiresIn: "2d" });

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

