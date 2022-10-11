const express = require("express")
const router = express.Router()

const {getProducts, newProducts} = require("../controllers/productsController")
router.route('/productos').get(getProducts)
router.route('/producto/nuevo').post(newProducts)

module.exports=router