import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const clearToken = () => {
    localStorage.removeItem('token')
    navigate('/login');
  }
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
        {!token ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <button type="button" style={{ borderColor: '#7e5bef', color: '#7e5bef' }} className="btn btn-outline-secondary">Kyqu</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <button type="button" style={{ borderColor: '#7e5bef', color: '#7e5bef' }} className="btn btn-outline-secondary">Regjistrohu</button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    onClick={clearToken}
                    type="button"
                    style={{ borderColor: '#7e5bef', color: '#7e5bef' }}
                    className="btn btn-outline-secondary"
                  >
                    Dil
                  </button>
                </li>
              </ul>
            )}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
