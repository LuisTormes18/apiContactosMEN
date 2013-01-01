const db = require("../../config/config_lowdb");
const hash = require("../auth/utils/hash");
const bcrypt = require("bcryptjs");

// loader profile
const get = (req, res) => {
  const { id_user } = req.body;

  const user = db.get("users").find({ id_user }).value();

  res.json({
    ok: true,
    msg: "Sucessfull!",
    user,
  });
};

// Update User
const update = (req, res) => {
  const { id_user, name, email } = req.body;

  const user = db.get("users").find({ email }).value();

  if (user) {
    return res.json({
      ok: false,
      msg: "El correo electronico ya existe, Intente con uno nuevo",
    });
  }


  db
    .get("users")
    .find({ id_user })
    .assign({ name, email })
    .write();

  res.json({
    ok: true,
    msg: "Update Sucessfull!",
  });
};

// Update Password user 
const updatepass= (req, res) => {
  const { id_user,password,newPassword } = req.body;

  const user = db.get("users").find({ id_user }).value();
  
  if (!bcrypt.compareSync(password, user.password)) {
    return res.json({
      ok: false,
      msg: "contraseña incorrecta",
    });
  }
  if (bcrypt.compareSync(newPassword, user.password)) {
    return res.json({
      ok: false,
      msg: "La nueva contarseña no puede ser igualala anterior!",
    });
  }
  
  const hashPassword = hash(newPassword);
  db
    .get("users")
    .find({ id_user })
    .assign({ password: hashPassword})
    .write();

  res.json({
    ok: true,
    msg: "update pass Sucessfull!",
  });
};

// Delete User
const del = (req, res) => {
  const { id_user } = req.body;

  // Eliminado al uasurio
  db.get("users").remove({ id_user }).write();

  // Eliminado los contactos de ese usuario
  db.get("contacts").remove({ id_user }).write();

  res.json({
    ok: true,
    msg: "Delete Sucessfull!",
  });
};

module.exports = { get, update,updatepass, del };
