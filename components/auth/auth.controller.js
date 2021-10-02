const { response } = require("express");
const path = require("path");
const { generarJWT } = require("./utils/generarJWT");
const hash = require("./utils/hash");
const bcrypt = require("bcryptjs");
const shortid = require("shortid");
const db = require("../../config/config_lowdb");

// Login controller

const Login = (req, res = response) => {
    const { email, password } = req.body;

    const user = db.get("users").find({ email }).value();

    if (!user) {
        return res.json({
            ok: false,
            msg: "Incorrect username and / or password",
        });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.json({
            ok: false,
            msg: "Incorrect username and / or password",
        });
    }

    const token = generarJWT(user);

    res.json({
        ok: true,
        msg: "Login Sucessful!",
        user,
        token,
    });
};

// register controller

const Register = (req, res = response) => {
    const { name, email, password } = req.body;

    const hashPassword = hash(password);
    const id_user = shortid.generate();

    const ExistUser = db.get("users").find({ email }).value();

    if (ExistUser) {
        return res.json({
            ok: false,
            msg: "Email already exists, try a new one",
        });
    }

    // insert a new user
    
    db.get("users")
        .push({ id_user, name, email, password: hashPassword })
        .write();


    const token = generarJWT({ id_user });

    const user = db.get("users").find({ email }).value();


    return res.json({
        ok: true,
        msg: "Register Sucessful!",
        user,
        token,
    });
};

// Renovar Token Controller

const UpdateToken = (req, res = response) => {
    const token = generarJWT(req.body);

    return res.json({
        ok: true,
        msg: "Update Token Sucessfull!",
        token,
    });
};
module.exports = {
    Login,
    Register,
    UpdateToken,
};
