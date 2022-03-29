import React from 'react'

function Props(props) {
  const {name,heroname} = props
    // console.log(props)
  return (
    <div>
        <h1>Hello {name} a.k.a {heroname} in Props</h1>
        {props.children}
    </div>
  )
}

export default Props