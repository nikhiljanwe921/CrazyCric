import amazon from './pic/amazon.jpg';
import cart from './pic/cart.png';
import React, { Component }  from 'react';
import  { render   }  from 'react-dom';
function Header() {
    return (
        <>
            <header className="p-0 bg-light text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-0 mb-0 lg-0 text-danger text-decoration-none">
                        <img height={50} width={100} src={amazon} alt="hi" className="mb-0" />                   
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary"><h4>Home</h4></a></li>
                            <li><a href="#" className="nav-link px-2 text-danger"><h4>Features</h4></a></li>
                            <li><a href="#" className="nav-link px-2 text-danger"><h4>Pricing</h4></a></li>
                            <li><a href="#" className="nav-link px-2 text-danger"><h4>FAQs</h4></a></li>
                            <li><a href="#" className="nav-link px-2 text-danger"><h4>About</h4></a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-light bg-dark" placeholder="Search..." aria-label="Search"></input>
                        </form>

                        <div className="text-end m-1 ">
                            <button type="button" className="btn btn-secondary me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                            
                            <img height={40} src={cart} alt="img" />                   
                            
                        </div>
                    </div>
                </div>
            </header>



        </>
    );
}

export default Header;