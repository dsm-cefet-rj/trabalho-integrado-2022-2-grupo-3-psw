const authenticationService = require("./authenticationService");
const userRepository = require("../repositories/usersRepository");
const { findProductById } = require("../repositories/product.repository");

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

const addToFavorites = async(req, res) => {
  const idUser = req.params.idUser;
  const idProduct = req.params.idProduct;

  try{
    const product = await findProductById(idProduct);
    const favoritedProduct = await userRepository.addToFavorites(idUser, product);

    if(!favoritedProduct){
      await userRepository.removeToFavorites(idUser, product);
      return res.status(200).send({message: "Produto removido com sucesso da lista de favoritos."})
    }
    res.status(200).send({message: "Produto adicionado com sucesso da lista de favoritos."});   
  }catch(err){
    res.send({message: err.message})
  }
}

const getUsers =  async(req, res) => {
  try {
    const users = await userRepository.getUsers();

    if (users.length === 0) {
        return res.status(400).send({ message: "Não há usuários cadastrados." })
    }

    return res.status(200).send(users);
} catch (err) {
    console.log(err.message)
    return res.status(400).send({ message: "Não foi possível retornar todos os usuários." });
}
}

module.exports = {
  registerUser,
  authUser,
  addToFavorites,
  getUsers
};
