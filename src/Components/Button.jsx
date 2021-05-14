import React from 'react'

const Button = ({content, handleClick}) => {
  return (
    <div className="countryBtn" onClick={handleClick}>
      {content}
    </div>
  )
}

export default Button
