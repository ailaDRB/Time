
import React, { useState, useEffect } from "react";
function sayHi() {
    console.log("Hey");
  }
  setInterval(sayHi, 1000);
  
function Time() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  return (
    <div className="container">
      <h1>{currentTime || "TIME"}</h1>
      <button onClick={handleClick}>Click to Get Time</button>
    </div>
  );
}

export default Time;
// import React from "react";

// function Time() {
// let time = new Date().toLocaleTimeString();
// console.log(time);
//   return (
//     <div className="container">
//       <h1>TIME</h1>
//       <button>Get Time</button>
//     </div>
//   );
// }


// export default Time;