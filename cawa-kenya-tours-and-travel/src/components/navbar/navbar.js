import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-blur fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Image src="/images/b.png" alt="logo" className="logo-fluid" width={170} height={60} />
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">About Us</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-light" href="/services">Services</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light contact" href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
