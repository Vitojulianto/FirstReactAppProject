import React from 'react'
import Index from '../components/Input/Index'
import Button from '../components/Button/Button'

const FormRegister = () => {
  return (
    <div>
      
      
    
          <div>
           
              <form className="space-y-5">
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

                <Index
                  type="password"
                  placeholder="Enter your password again"
                  name="confirm password"
                  title="Confirm Password"
                />
      
                <Button
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg w-full"
                  type="submit"
                >
                  Login
                </Button>
              </form>
          </div>
        
      
      
      
      
    </div>
  )
}

export default FormRegister
