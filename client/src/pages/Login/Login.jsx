import React , { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
  
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    })
    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }))
    }

    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:5101/api/Auth/login', formData)
        console.log('Login successful:', response.data)
        const token = response.data.token
        localStorage.setItem('token', token)
        navigate('/') // redirect after successful registration
      } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message)
      }
    }
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="JohnDoe"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
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
