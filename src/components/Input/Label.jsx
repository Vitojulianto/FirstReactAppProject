import React from 'react'

const Label = (props) => {
    const {children} = props
  return (
    <div>
      <label >
        {children}
      </label>
    </div>
  )
}

export default Label
