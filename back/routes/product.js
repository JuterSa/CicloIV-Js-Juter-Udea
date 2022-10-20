const express = require("express")
const router = express.Router()

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController")
router.route('/productos').get(getProducts) //lista
router.route('/producto/nuevo').post(newProduct) //Nuevo
router.route('/producto/:id').get(getProductById) //Consulta por id
router.route('/producto/:id').put(updateProduct) //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct) //Eliminar


module.exports=router