import React from 'react';
// import logo from '../assets/img/logo/white.png';

export const Sidebar = () => {
  return (
    <div className='bg-white'>
      <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
        <span className='brand-name fs-4'>logo</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2'>
          <i className='bi bi-grid-1x2-fill fs-5 me-2'></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Appointments</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Book Appointments</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Medical History</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Prescriptions</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Upload Prescription</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Profile</span>
        </a>

        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Sample Collection Department Mapping</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Set Value Master</span>
        </a>
        <a className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-2'></i>
          <span className='fs-5'>Logout</span>
        </a>
      </div>
    </div>
  )
}
