const { customerTable } = require("./Schemas/customer"); // schemas
module.exports = {
 signup_Function: async (body) => {
  console.log(body)
  try {
   const signup_Response = await customerTable.create(body);
   return {
    response: "You are registered !"
   }
  } catch (error) {
   return {
    error: error.message,

   }
  }
 },
}