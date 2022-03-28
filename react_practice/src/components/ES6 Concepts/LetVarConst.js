import React from "react";

function LetVarConst() {
  const var1 = { name: "bob" };
  var1.name = "sally";
  console.log(var1);
  if (true) {
    var varVariable = "this is true";
  }
  console.log(varVariable);
  varVariable = "this is false";
  console.log(varVariable);
  if (true) {
    let letVariable = "this is true";
  }
  let letVariable = "true";
  // let letVariable="false"
  console.log(letVariable);
  if (true) {
    const constVariable = "this is true";
  }
  const constVariable = "true";
  // const constVariable="false"
  console.log(constVariable);
  return (
    <div>
      <h1>Points to Remember :</h1>
      <h3>
        1) var variable can be declared in a block and can be used anywhere in
        the code.
      </h3>
      <h3>
        2) let and const variable can be declared in a block but can only be
        used inside that block.
      </h3>
      <h3>
        3) var variables can be redefined or redeclared after its declaration.
      </h3>
      <h3>4) let variables cannot be redeclare after its declaration</h3>
      <h3>
        5) We can use var variables before defining it and after defining
        variable it will show undefined.
      </h3>
      <h3>
        6) but in let and const we cannot use let, const variable before
        defining
      </h3>
      <h3>7) const doesnt let uh change the value of the variable </h3>
      <h3>8) but const let uh change the object value</h3>
    </div>
  );
}

export default LetVarConst;
