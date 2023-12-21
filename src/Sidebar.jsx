import React from 'react';
import './assets/css/custom.css'
import logo from './assets/img/logo/white.png'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='bg-white'>
      <div className='m-2'>
      <img src={logo} className="App-logo" alt="logo" height={40}/>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <Link to="/" className='list-group-item py-2'>
          <i className='bi bi-grid-1x2-fill fs-5 me-3'></i>
          <span className='fs-6'>Dashboard</span>
        </Link>
        <Link to="/appointments" className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Appointments</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Book Appointments</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Medical History</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Prescriptions</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Upload Prescription</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Profile</span>
        </Link>

        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Sample Collection Department Mapping</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Set Value Master</span>
        </Link>
        <Link className='list-group-item py-3'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-6'>Logout</span>
        </Link>
      </div>
    </div>
  )
}
