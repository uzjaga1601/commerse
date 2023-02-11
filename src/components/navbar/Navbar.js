import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">Online Shop</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Product</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar