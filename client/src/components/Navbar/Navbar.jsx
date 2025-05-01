import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/" style={{ color: '#7e5bef' }}>
          Mëso.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              
              <Link to="/login" className="nav-link">
              <button type="button" style={{ borderColor: '#7e5bef', color : '#7e5bef' }}  class="btn btn-outline-secondary">Kyqu</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
              <button type="button" style={{ borderColor: '#7e5bef', color : '#7e5bef' }}  class="btn btn-outline-secondary">Regjistrohu</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
