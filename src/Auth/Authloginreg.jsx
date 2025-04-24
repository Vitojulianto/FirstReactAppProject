import React, { Children } from 'react'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'

const Authloginreg = (props) => {
    const{title, children, type} = props
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
      <h3 className="text-3xl font-bold text-blue-700 text-center mb-2">Welcome Back!</h3>
        <p className="text-sm text-gray-500 text-center mb-6">
          {title}
        </p>
        {children}
        {type === 'Login' ? 
        <p className='mt-4 text-center'>Don't have an account yet? <Link to='/register' className='text-blue-400 hover:text-blue-700'>Register</Link></p>:
        <p className='mt-4 text-center'>Already have an account? <Link to='/login' className='text-blue-400 hover:text-blue-700'>Login</Link></p>}
    </div>
    
    </div>
  )
}

export default Authloginreg
