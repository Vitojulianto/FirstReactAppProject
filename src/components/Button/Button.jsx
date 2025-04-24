import React from 'react'

const Button = (props) => {
    const{className, children, type='button', onClick} = props
  return (
    <div>
      <button
      className={className}
      type={type}
      onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
