import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import StartPage from '../../components/StartPage/StartPage'

const HomePage = () => {
  const token = localStorage.getItem('token')
  return (
    <div>
      <Navbar/>
      {!token ? (
        <StartPage />
    ) : (
      <div>Welcome back!</div> // or whatever you want for logged-in users
    )}
    </div>
  )
}

export default HomePage
