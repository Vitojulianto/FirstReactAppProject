import React from 'react'
import Authloginreg from '../Auth/Authloginreg'
import FormLogin from '../Fragments/FormLogin'


const Login = () => {
  return (
    <Authloginreg type='Login' title="Please login to continue">
        <FormLogin />
    </Authloginreg>
  )
}

export default Login
