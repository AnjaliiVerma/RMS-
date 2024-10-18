import React from 'react';
import Image from '../Image/Logo.jpg';
import Image1 from '../Image/img1.jpg';
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top  shadow-sm"  style={{background:"#ffffff",
      width: "100%"}}>
      <div className="container-fluid">
        <button className="btn" onClick={toggleSidebar}>
          <i className="bi bi-list fs-3"></i> {/* Hamburger Icon */}
        </button>
        <a className="navbar-brand ms-3 d-flex align-items-center" href="#">
          <img src={Image} alt="RMS Logo" height="30" />
          <h4 className='ms-1'>RMS</h4>
        </a>
        <div className="d-flex ms-auto">
          <Link to='/inquiry' href="#" className="me-3">
            <i className="bi bi-cart fs-3"></i> {/* Cart Icon */}
          </Link>
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Image1} alt="User Image" width="40" height="40" className="rounded-circle" />
              <span className="ms-2 fw-bold" >Anjali</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
