const userModel = require("../models/user.model");
module.exports.createUser = ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All input is required");
  }
  return userModel.create({
    fullname: { firstname, lastname },
    email,
    password,
  });
};
