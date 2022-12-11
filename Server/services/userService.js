const authenticationService = require("./authenticationService");
const User = require("../models/User");
const userRepository = require("../repositories/usersRepository");

const registerUser = async (user) => {
  if (!user.nome || !user.email || !user.password) {
    return {
      message:
        "Todos os campos devem ser preenchidos para realizar o registro!",
      success: false,
    };
  }

  const duplicatedEmail = await userRepository.validateEmail(user.email);

  if (duplicatedEmail) {
    return { message: "Esse email já está em uso!", success: false };
  }

  const hashedPassword = await authenticationService.hashPassword(user.password);
  user.hashedPassword = hashedPassword;

  const registeredUser = await userRepository.registerUser(user);
  console.log(hashedPassword)

  return {
    message: "Usuário cadastrado com sucesso!",
    registeredUser,
    success: true,
  };
};

async function authUser(email, password) {
  let result = await authenticationService.authUser(email, password);

  return result;
}

module.exports = {
  registerUser,
  authUser,
};
