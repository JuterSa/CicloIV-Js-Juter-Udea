const express=require("express");
const router= express.Router();
const { registroUsuario } = require("../controllers/authController");

router.route('/usuario/registro').post(registroUsuario)

module.exports= router