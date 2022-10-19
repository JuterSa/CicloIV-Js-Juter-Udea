import React, { Fragment, useEffect } from "react"
import MetaData from "./layout/MetaData"
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productAction'

export const Home =() =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return(
        <Fragment>
    <MetaData title="Lo mejor para tu perro"></MetaData>        
<h1 id="encabezado_productos">Ultimos Productos</h1>

<section id="productos" className='container mt-5'>
    <div className='row'>
        {/*Producto 1*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/alimentoperro1.jpg' alt="Nutra gold"></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000/'>Nutra Gold Holistic Gatos</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> 5 reviews</span>
                    </div>
                    <p className='card-text'>$72.000</p><a href='http://localhost:3000/' id="view_btn" className='btn btn-block'>
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
        {/*Producto 2*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/alimentoperromax2.jpg' alt="Nutra gold"></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000/'>Perro max</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> 5 reviews</span>
                    </div>
                    <p className='card-text'>$150.000</p><a  href='http://localhost:3000/' id="view_btn" 
 className='btn btn-block'>
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
        {/*Producto 3*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/alimentodogourmet3.jpg' alt="Nutra gold"></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000/'>Dogourmet</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> 5 reviews</span>
                    </div>
                    <p className='card-text'>$300.000</p><a href='http://localhost:3000/' id="view_btn"  className='btn btn-block'>
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
        {/*Producto 4*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/docshow.jpg' alt="Nutra gold"></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000/'>Doc Show</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> 5 reviews</span>
                    </div>
                    <p className='card-text'>$78.000</p><a href='http://localhost:3000/' id="view_btn"  className='btn btn-block'>
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
        {/*Producto 5*/}
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src='./images/ringo.jpg' alt="Nutra gold"></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto"><a href='http://localhost:3000/'>Ringo</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> 5 reviews</span>
                    </div>
                    <p className='card-text'>$250.000</p><a href='http://localhost:3000/' id="view_btn"  className='btn btn-block'>
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

        
        </Fragment>

       
     
    )
}
export default Home