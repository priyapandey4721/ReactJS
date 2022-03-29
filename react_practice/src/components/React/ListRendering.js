import React from "react";
import Person from "./Person";

function ListRendering() {
  const names = ["priya", "preeti", "komal"];
  const persons = [
    {
      id: 1,
      name: "priya",
      age: 22,
      skill: "JS",
    },
    {
      id: 2,
      name: "preeti",
      age: 26,
      skill: ".NET",
    },
    {
      id: 3,
      name: "komal",
      age: 25,
      skill: "Banking",
    },
  ];
  const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <>
      <div>{nameList}</div>
      <div>{personList}</div>
    </>
  );
}

export default ListRendering;
