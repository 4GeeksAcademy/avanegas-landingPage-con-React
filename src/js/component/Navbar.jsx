import React from "react";

const Navbar = ({title, home, about, services }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white " aria-current="page" href="#">{home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-secondary" href="#">{about}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-secondary" aria-disabled="true">{services}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            )
}

export default Navbar;