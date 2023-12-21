import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Appointments from './Components/Appointments'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid min-vh-100 '>
            <div>
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/appointments' element={<Appointments />}></Route>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
