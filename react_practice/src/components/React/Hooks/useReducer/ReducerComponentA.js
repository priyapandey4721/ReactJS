import React, { useContext } from "react";
import { CountContext } from "../../../../App";

function ReducerComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
        <h2>Component A - {countContext.countState}</h2>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ReducerComponentA;
