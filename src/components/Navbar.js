import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
  
  return (
<header className={`p-3 mb-3 border-bottom bg-${props.Mode} text-${props.Mode==='light'?'dark':'light'}`}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
         
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className={`nav-link px-2 link-secondary text-${props.Mode==='light'?'dark':'light'}`}>{props.title}</a></li>
          <li><a href="#" className={`nav-link px-2 link-body-emphasis text-${props.Mode==='light'?'dark':'light'}`}>Inventory</a></li>
          <li><a href="#" className={`nav-link px-2 link-body-emphasis text-${props.Mode==='light'?'dark':'light'}`}>{props.about}</a></li>
          <li><a href="#" className={`nav-link px-2 link-body-emphasis text-${props.Mode==='light'?'dark':'light'}`}>Products</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="dropdown text-end">
          
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="/">New project...</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Mode}</label>
</div>
      </div>
      
    </div>
  </header>
  )
}
Navbar.propTypes={
    title:propTypes.string.isRequired,
    about:propTypes.string.isRequired
  }
  
  
Navbar.defaultProps={
    title:"testreact",
    about:"about"
}