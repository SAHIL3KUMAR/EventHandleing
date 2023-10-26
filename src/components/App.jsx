import React, { useState } from "react";

function App() {
  const [getcolor, setcolor] = useState(false);

  function handlecolor() {
    setcolor(true);
  }
  function handleout() {
    setcolor(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handlecolor}
        style={{ backgroundColor: getcolor ? "black" : "white" }}
        onMouseOut={handleout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
