const { Router } = require("express");
const userService = require("./userService");

var router = Router();

router.post("/", registerUser);
router.post("/auth", authUser);

async function registerUser(req, res) {
  const user = req.body;
  
  const result = await userService.registerUser(user);

  if (result.success) {
    return res.status(200).send(result)
  }

  return res.status(400).send(result);
};

async function authUser (req, res) {
  const userEmail = req.params.email;
  const userPassword = req.params.password;

  const result = await userService.authUser(userEmail, userPassword);

  if (result.success) {
    return res.status(200).send(result);
  }

  return res.status(400).send(result);
};

module.exports = router;
