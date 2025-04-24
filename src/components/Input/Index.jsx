import React from 'react'
import Input from './Input'
import Label from './Label'

const Index = (props) => {
    const {type, placeholder, name, children, title, htmlFor} = props
  return (
    <div>
      <Label htmlFor={htmlFor}>{title}</Label>
      <Input type={type} placeholder={placeholder} name={name}>
      {children}
      </Input>
    </div>
  )
}

export default Index
