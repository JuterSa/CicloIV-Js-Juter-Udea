import React, { Fragment } from 'react'

const Header = () => {
  return (
    
    <Fragment>
        <nav className='navbar row'>
          <div className='col-12 col-md-3'>
            <div className='navbar-brand'>
              <img src='./images/buldog.png' alt='Imagen de perro'></img>
            </div>
          </div>

          <div class='col-12 col-md-6 mt-2 mt-md-0'>
            <div class='input-group'>
                  <input type="text" class='form-control' placeholder='Que producto busca?'></input>
                  <div class="input-group-append">
                  <button id="search-btn" class="btn">
                        <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                    </button>
                  </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i class="bi bi-cart-plus text-white"></i>
                    
                    <span className="ml-1" id="cart_count">0</span>
          </div>
        </nav>
    </Fragment>
  )
}

export default Header
