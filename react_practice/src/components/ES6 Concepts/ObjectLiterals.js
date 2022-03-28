import React from 'react'

function ObjectLiterals() {
    let firstname ="chandler";
    let lastname = "Bing"
    let person ={
        firstname,
        lastname
    }
    console.log(person)
    function createPerson(firstname,lastname,age){
        let fullname= firstname + " " + lastname;
        return{
            firstname,
            lastname,
            fullname,
            isSenior(){
                return age >60;
            }
        }
    }
    let p = createPerson("Ross","Geller",62);
    console.log(p.firstname)
    console.log(p.lastname);
    console.log(p.fullname);
    console.log(p.isSenior());
  return (
    <div>

    </div>
  )
}

export default ObjectLiterals