import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f9f9fb' }}>
        <div className="card shadow border-0 rounded-4 overflow-hidden" style={{ maxWidth: '800px', width: '100%' }}>
          <div className="row g-0">
            {/* Left Side Illustration */}
            <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center" style={{ backgroundColor: '#7e5bef', color: 'white' }}>
              <div className="text-center p-4">
                <h2>Welcome Back!</h2>
                <p className="lead">Log in to access your account.</p>
                <i className="bi bi-box-arrow-in-right" style={{ fontSize: '4rem' }}></i>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="col-md-6 bg-white p-5">
              <h3 className="text-center mb-4" style={{ color: '#7e5bef' }}>Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="••••••••" />
                </div>
                <button type="submit" className="btn w-100" style={{ backgroundColor: '#7e5bef', color: 'white' }}>
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <small>
                  Don't have an account? <Link href="/register" style={{ color: '#7e5bef' }}>Register here</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
