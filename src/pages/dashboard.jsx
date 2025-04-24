import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Fragments/Navbar'

const Dashboard = () => {
  const username = localStorage.getItem('username')

  return (
    <Navbar />
  )
}

export default Dashboard
