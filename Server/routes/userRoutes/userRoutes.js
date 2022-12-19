const { Router } = require("express");
const userService = require("../../services/userService");
const authenticationService = require("../../services/authenticationService");

var router = Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/validate/:token", authenticationService.validateToken);
router.patch("/addToFavorites/:idUser/:idProduct", userService.addToFavorites);
router.patch("/addToCart/:userId/:productId", userService.addToCart);
router.patch("/updateItemQuantity/:userId/:productId", userService.updateItemQuantity);

router.get("/", userService.getUsers);

async function registerUser(req, res) {
  const user = req.body;

  const result = await userService.registerUser(user);

  if (result.success) {
    return res.status(200).send(result)
  }

  return res.status(400).send(result);
};

async function authUser (req, res) {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  const result = await userService.authUser(userEmail, userPassword);

  if (result.success) {
    return res.status(200).send(result);
  }

  return res.status(400).send(result);
};

module.exports = router;
