import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/tab'
import '../assets/css/custom.css'

export default function Appointments() {
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
                            <h1>Appointments</h1>
                        </div>
                    </div>

                    <div className='card-top'>
                        <div className='card mx-3 p-3'>
                            <nav>
                                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                </div>
                            </nav>
                            <div class="tab-content p-3 border bg-light" id="nav-tabContent">
                                <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <p><strong>This is some placeholder content the Home tab's associated content.</strong>
                                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                                        classes to control the content visibility and styling. You can use it with tabs, pills, and any
                                        other <code>.nav</code>-powered navigation.</p>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <p><strong>This is some placeholder content the Profile tab's associated content.</strong>
                                        Clicking another tab will toggle the visibility of this one for the next.
                                        The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                        tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                        Clicking another tab will toggle the visibility of this one for the next.
                                        The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                        tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
