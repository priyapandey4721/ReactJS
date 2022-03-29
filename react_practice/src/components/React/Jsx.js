import React from "react";

function Jsx() {
  //   return (
  //     <div><h1>Jsx</h1></div>
  //   )
  return React.createElement(
    "div",
    {id:'hello',className:'dummyclass'},
    React.createElement("h1", null,  "Hello World in JSX")
  );
}

export default Jsx;
