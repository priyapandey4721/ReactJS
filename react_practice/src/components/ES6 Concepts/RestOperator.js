import React from 'react'

function RestOperator() {
    let displayColors = function(message,...colors){
        console.log(message)
        console.log(colors);
        console.log(arguments.length);
        for(let i in colors){
            console.log(colors[i]);
        }
    }
    let message = "List of Colors"
    displayColors(message,'Red')
    displayColors(message,'Red','Blue')
    displayColors(message,'Red','Blue','Green')
  return (
    <div>
        <h1>Points to Remember : </h1>
        <h3>1) rest operator is called in function</h3>
        <h3>2) rest operators make an array of list that we provide individually</h3>
    </div>
  )
}

export default RestOperator