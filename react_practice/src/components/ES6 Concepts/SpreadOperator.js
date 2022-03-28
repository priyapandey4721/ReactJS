import React from 'react'

function SpreadOperator() {
    let displayColors = function(message,...colors){
        console.log(message)
        for(let i in colors){
            console.log(colors[i]);
        }
    }
    let message = "List of Colors"
   let colorArray =['Orange',"Yellow","Indigo"]
   displayColors(message,...colorArray)
  return (
    <div>
        <h1>Points to Remember : </h1>
        <h3>1) spread operator is called while calling the function</h3>
        <h3>2) spread operators make an array of list and seprates them individually</h3>
    </div>
  )
}

export default SpreadOperator