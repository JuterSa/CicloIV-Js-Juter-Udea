const express=require("express")
const app = express()
app.use(express.json());

//Importar rutas
const productos=require("./routes/product")

app.use('/api',productos) //Sujeto a decision (ruta del navegador)

module.exports=app