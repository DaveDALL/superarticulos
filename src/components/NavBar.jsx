import '../App.css'
import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light m-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SuperArticulos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 3</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    </>
  )
}

export default NavBar