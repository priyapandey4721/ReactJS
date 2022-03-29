import React from 'react'

function EventHandling() {
    function clickHanlder(){
        console.log('button clicked')
    }
  return (
    <div>
        <button onClick={clickHanlder}>Click</button>
        {/* For class components
        <button onClick={this.clickHanlder}>Click me </button> */}
    </div>
  )
}

export default EventHandling