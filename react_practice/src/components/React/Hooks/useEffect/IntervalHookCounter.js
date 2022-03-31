import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };
  function dosomething(){
  console.log("someProp");
  }
  useEffect(() => {
      dosomething()
    const interval = setInterval(tick, 1000);
    return () =>{
        clearInterval(interval)
    }
  }, []);
  return <div><h1>{count}</h1></div>;
}

export default IntervalHookCounter;
