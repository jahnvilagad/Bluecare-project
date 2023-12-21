import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './assets/css/custom.css'

export default function Navbar({ Toggle }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-white px-3">
            <div>
                <div className='d-flex align-items-center'>
                    <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
                    <h3 className='mb-0 text-white'>Patient Dashboard</h3>
                </div>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='bi bi-justify'></i>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Patient  </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#"><i className="bi bi-person-fill"></i> My Profile</a>
                            <a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
