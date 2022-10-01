import React from 'react'
import "./Button.css"

const Button = ({ className, text, style, onClick}) => {
  return (
    <button style={style} onClick={onClick} className={`basicButton ${className}`}>{text}</button>
  )
}

export default Button

// Se declaran
// Tienen parametros -> props
// Tienen return -> Retornamos un jsx
// JSX -> HTML con JS
// Se ejecutan -> Mandar a llamar componente