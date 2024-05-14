import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white">Start Bootstrap</span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;