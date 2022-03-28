import React from 'react'

function ArrowFunction() {
    class Person{
        constructor(name){
        this.name=name
        }
        printNameArrow(){
            setTimeout(()=>{
                console.log("Arrow : "+ this.name)
            },100)
        }
        printNameFunction(){
            setTimeout(function(){
                console.log("Function : "+ this.name )
            },100)
        }
    }
    let person = new Person('Bob')
    person.printNameFunction()
    person.printNameArrow()
    // console.log(this.name)
    function sum(a,b){
        return a + b
    }
    let sum2 = (a,b) => {
        return a + b
    }
    function isPositive(number){
        return number >= 0
    }
    let isPositive2 = number => {
        return number >= 0
    }
    function randomNumber(){
        return Math.random
    }
    let randomNumber2 = () => {
        return Math.random
    }
    document.addEventListener('click',function(){
        console.log("Click")
    })
    document.addEventListener('click',() => {
        console.log("Click")
    })
  return (
    <div>
        <h1>Points to Remember : </h1>
        <h3></h3>
    </div>
  )
}

export default ArrowFunction