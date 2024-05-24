import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar() {

  const [location, setLocation] = useState('')

  useEffect(() => {
    let location = window.location.href.split('/')[3];
    setLocation(location);
  },[])
  
  return (
    <div className='w-100 d-flex justify-content-around py-3 bg-dark' style={{ zIndex : 5}}>
        
        {/* <div>
            <h3>SKY BRAIN SOFTWARES</h3>
        </div> */}

        <div className='d-flex align-items-center'>
            {/* <Link to="/" className='nav-link'><p className={`m-0 px-3 ${(location === '' || location === '#contact-us') ? 'text-info' : ''}`}>HOME</p></Link>
            <Link to="/service" className='nav-link'><p className={`m-0 px-3 ${location === 'service' ? 'text-info' : ''}`}>SERVICES</p></Link>
            <Link to="/ourteam" className='nav-link'><p className={`m-0 px-3 ${location === 'ourteam' ? 'text-info' : ''}`}>OUR TEAM</p></Link>
            <HashLink to={"/#contact-us"} className='nav-link'><p className='m-0 px-3'>CONTACT US</p></HashLink>
             */}

            
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">SKYBRAIN SOFTWARES</a>
        <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className='nav-link'><p className={`m-0 px-3 ${(location === '' || location === '#contact-us') ? 'text-info' : ''}`}>HOME</p></Link>
            </li>
            <li className="nav-item">
            <Link to="/service" className='nav-link'><p className={`m-0 px-3 ${location === 'service' ? 'text-info' : ''}`}>SERVICES</p></Link>
            </li>
            <li className="nav-item ">
            <Link to="/ourteam" className='nav-link'><p className={`m-0 px-3 ${location === 'ourteam' ? 'text-info' : ''}`}>OUR TEAM</p></Link>
            </li>
            <li className="nav-item">
               <HashLink to={"/#contact-us"} className='nav-link'><p className='m-0 px-3'>CONTACT US</p></HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
        </div>

    </div>
 
  )
}

export default Navbar