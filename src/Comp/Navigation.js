import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navigation.css';


function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg   bg-secondary"  >
    <div class="container" >
      <a class="navbar-brand" href="#" style={{fontWeight:"bold"}}>Thapa Technical </a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDropdown" >
        <ul class="navbar-nav nav-justified ms-auto  "  variant="underline" >
          <li class="nav-item  me-1" >
            <a class="nav-link active  text-light  " aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item  me-1">
            <a class="nav-link  text-light" href="/about">About</a>
          </li>
         
          <li class="nav-item me-1">
            <a class="nav-link text-light" href="/services">Services</a>
          </li>
          <li class="nav-item me-1">
            <a class="nav-link text-light" href="/contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navigation