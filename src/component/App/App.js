import React from "react";
import Display from "../Display/Display";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
// import "./App.css"
// import "./Calculator.css"
function App() {
  return (
    <div className="app" >
      <div className="calculator">
					<Display />
          <ButtonGroup />
      </div>
    </div>
  );
}

export default App;
