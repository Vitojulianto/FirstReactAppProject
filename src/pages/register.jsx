import React from 'react'
import Authloginreg from '../Auth/Authloginreg'
import FormRegister from '../Fragments/FormRegister'

const Register = () => {
  return (
    <Authloginreg type='Register' title="Please register to continue">
        <FormRegister />
    </Authloginreg>
  )
}

export default Register
