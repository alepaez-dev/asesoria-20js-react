import React from 'react'
import "./Tag.css"

const Tag = ({text}) => {
  return (
    <a className="tag">#{text}</a>
  )
}

export default Tag