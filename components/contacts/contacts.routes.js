const { get, add, update, del } = require("./contacts.controller");
const validarToken = require("../../middlewares/validator-token");
const validarCampos = require("../../middlewares/validator-campos");
const { check } = require("express-validator");
const express = require("express");
const router = express.Router();

// Listar los contactos de un usuario
router.get(`/`, [validarToken], get);

// Router contacts Post
router.post(
  `/add`,
  [
    check("fullname", "el nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("phone", "El Telefono es obligatorio").not().isEmpty().isLength({ min: 7 }),
    check("direction", "La direccion es obligatoria").not().isEmpty(),
    validarToken,
  ],
  add
);

//Route para actualizar un  contacto
router.put(`/update/:id`, [validarToken], update);

//Route para Eliminar un  contacto
router.delete(`/delete/:id`, [validarToken], del);

module.exports = router;
