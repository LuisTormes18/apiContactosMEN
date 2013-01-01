const { get, update,updatepass, del } = require("./users.controller");
const validarToken = require("../../middlewares/validator-token");
const validarCampos = require("../../middlewares/validator-campos");
const { check } = require("express-validator");
const express = require("express");
const router = express.Router();

// loader profile
router.get("/", [validarToken], get);

// Update User
router.put(
  "/update",
  [
    validarToken,
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  update
);

// Update Password user 
router.put(
    "/update-pass",
    [
      validarToken,
      check("password", "La contraseña actual es obligatoria").isLength({ min: 6 }),
      check("newPassword", "La nueva contraseña es obligatoria").isLength({ min: 6 }),
      validarCampos,
    ],
    updatepass
  );

// Delete User
router.delete("/delete", [validarToken], del);

module.exports = router;
