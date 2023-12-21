import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../assets/css/custom.css'

export default function Dashboard({ }) {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => { setToggle(!toggle) }

    return (
        <div>
            <div className='row'>
                {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed p-0'>
                    <Sidebar />
                </div>}
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col px-0'>
                    <Navbar Toggle={Toggle} />

                    <div className='container-fluid px-0'>
                        <div className='image-overlay' >
                            <h1>Dashboard</h1>
                        </div>
                    </div>

                    <div className='card-top'>
                        <div className='card mx-3 p-3'>
                            <div className='row'>
                                <div className='col-md-6 col-lg-4 mb-3 mb-lg-0'>
                                    <div className='card h-100'>
                                        <div className="card-body">
                                            <i className="bi bi-calendar2-week"></i>
                                            <h5 className="card-title">Appointments</h5>
                                            <p className="card-text">No Appointments Available!</p>
                                            <a href="#" className="card-link btn btn-primary">Book Appointments</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 mb-3 mb-lg-0'>
                                    <div className='card h-100'>
                                        <div className="card-body">
                                            <i className="bi bi-calendar2-week"></i>
                                            <h5 className="card-title">Medications</h5>
                                            <p className="card-text">No Appointments Available!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-4 mb-3 mb-lg-0'>
                                    <div className='card h-100'>
                                        <div className="card-body">
                                            <i className="bi bi-calendar2-week"></i>
                                            <h5 className="card-title">Lab Results</h5>
                                            <p className="card-text">No Appointments Available!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
