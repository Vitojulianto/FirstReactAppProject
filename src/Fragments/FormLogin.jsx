import React from 'react'
import Index from '../components/Input/Index'
import Button from '../components/Button/Button'

const FormLogin = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('username',e.target.username.value)
        localStorage.setItem('password',e.target.password.value)
        window.location.href = '/dashboard'
    }
  return (
    <div>
      

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Index
            type="text"
            placeholder="Enter your username"
            name="username"
            title="Username"
          />
          <Index
            type="password"
            placeholder="Enter your password"
            name="password"
            title="Password"
          />

          <Button
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg w-full"
            type="submit"
          >
            Login
          </Button>
        </form>
    </div>
  )
}

export default FormLogin
