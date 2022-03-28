import React from 'react'

function MapReduceFilter() {
    const numbers =[1,4,5,6]
    const names =["Adi","Priya","Preeti","Komal"]
    const arrofarr = [[1,2],[2,3],[4,5]]
    const newArray = numbers.map((currentVal)=>{
        return currentVal+2
    })
    console.log(newArray);
    const filterArray = numbers.filter((currentVal)=>{
        return currentVal > 4
    })
    console.log(filterArray);
    const filterNames = names.filter((names)=>{
        return names.length > 4
    })
    console.log(filterNames);
    const arrayReduce = numbers.reduce((accumulator,currentValue)=>{
        return accumulator = accumulator+currentValue
    })
    console.log(arrayReduce);
    const namearrayReduce = names.reduce((accumulator,currentValue)=>{
        return accumulator = accumulator+ " " + currentValue
    })
    console.log(namearrayReduce);
    const arrayofarrayReduce = arrofarr.reduce((accumulator,currentValue)=>{
        return accumulator.concat(currentValue)
    })
    console.log(arrayofarrayReduce);
  return (
    <div>MapReduceFilter</div>
  )
}

export default MapReduceFilter