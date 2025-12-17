import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}-{props.dept}-{props.year}</h1>
    </div>
  )
}

export default Header