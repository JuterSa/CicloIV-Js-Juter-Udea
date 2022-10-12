const producto= require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));


//Ver lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos = await producto.find()
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}
//Ver un producto por id
    exports.getProductById= async (req, res, next)=>{
        const product= await producto.findById(req.params.id)
        if (!product){
            return res.status(404).json({
                success:false,
                message: "No encontramos ese producto"
            })
        }
        res.status(200).json({
            success:true,
            message:"Aqui debajo encuentras información sobre tu producto: ",
            product
        })
    }

//Update un producto await=Promesa
exports.updateProduct= async(req,res,next)=>{
    let product = await producto.findById(req.params.id)
    if (!product){ //Verifica que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }
    //Si el objeto existe, entonces si ejecuta la actualizacion
    product = await producto.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators:true
    })
    //Responde ok 200 si el producto se actualizo
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        producto //Es como si mostrara un return con el producto modificado
    })
}    

//Crear producto /api/productos/nuevo
exports.newProducts=async(req,res,next)=>{
    const product= await producto.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

//Eliminar producto 
//Verifica que el objeto no existe para finalizar el proceso
exports.deleteProduct= async(req,res,next)=>{
    const product = await producto.findById(req.params.id)
    if (!product){ 
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }
    await product.remove() //Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//Utilizando Fetch por dudas volver a ver video 12/10/2022
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.error(err))
}
//verProductos()  //Llamado al metodo creado para probar la consulta

function verProductoPorId(id){
    fetch('http://localhost:4000/api/producto/'+id).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.error(err))
}
verProductoPorId('6346ac01116fae0f3e1294d2')
//ver por id