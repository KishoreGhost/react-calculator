import React from 'react'

const Button = (props) => {

    const{value, handleInputClick} = props
  return (
    <div>
      <button onClick={() => handleInputClick(value)}>{value}</button>
    </div>
  )
}

export default Button
