const { Login, Register, UpdateToken } = require("./auth.controller");
const validarToken = require("../../middlewares/validator-token");
const { check } = require("express-validator");
const validarCampos = require("../../middlewares/validator-campos");
const express = require("express");
const router = express.Router();

// Router Login
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  Login
);

// router register
router.post(
  "/add",
  [
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  Register
);

//router update token
router.get("/", validarToken, UpdateToken);

module.exports = router;
