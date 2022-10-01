import React from 'react'
import "./Reaction.css"

const Reaction = ({ children, value }) => {
  return (
    <div className="heart-container">
      {children}
      <span className="heart-info">{value}</span>
    </div>
  )
}

export default Reaction