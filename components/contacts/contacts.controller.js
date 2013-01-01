const path = require("path");
const shortid = require("shortid");
const db = require("../../config/config_lowdb");

const get = (req, res) => {
  const { id_user } = req.body;

  const listContacts = db
    .get("contacts")
    .value()
    .filter((contact) => contact.id_user == id_user);

  res.json({
    ok: true,
    msg: "Sucessfull!",
    listContacts,
  });
};

const add = (req, res) => {
  const { id_user, fullname, email, phone, direction } = req.body;

  const id = shortid.generate();

  db.get("contacts")
    .push({ id, fullname, email, phone, direction, id_user })
    .write();

  res.json({
    ok: true,
    msg: "Add Sucessfull!",
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const {fullname, email, phone, direction } = req.body
  
  const contact = db
    .get("contacts")
    .find({ id })
    .assign({fullname, email, phone, direction })
    .write();

  console.log(contact);
  res.json({
    ok: true,
    msg: "update Sucessfull!",
  });
};

const del = (req, res) => {
  const { id } = req.params;

  db.get("contacts").remove({ id }).write();

  res.json({
    ok: true,
    msg: "delete Sucessfull!",
  });
};

module.exports = { get, add, update, del };
