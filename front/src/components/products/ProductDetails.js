import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Agility Alimento Blando Perros"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../../images/productos/purina-one.jpg" alt="Imagen_producto" height="400" width="400"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Alimento humedo Agility para Perros Juter</h3>
                <p id="product_id">Product #3253252</p>
            </div>
        </div>
    </Fragment>
  )
}