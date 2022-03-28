import React from 'react'

function DestructingArrayandObject() {
    let employee = ["Chandler","Bing","Female"]
    let [fname,lname,gender="Male"] = employee
    console.log(fname);
    console.log(lname);
    console.log(gender);
    let student ={
        fname:"Priya",
        lname:"Pandey",
        gender:"Female"
    }
    let {fname:f,lname:l,gender:g}=student;
    console.log(f);
    console.log(l);
    console.log(g);
    return (
    <div>DestructingArrayandObject</div>
  )
}

export default DestructingArrayandObject