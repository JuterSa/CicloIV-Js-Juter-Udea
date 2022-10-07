const app=require("./app")
const connectDatabase = require("./config/database")
const dotenv = require("dotenv")

dotenv.config({path:'back/config/config.env'})
connectDatabase();

const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`) //Comillas Warning
})