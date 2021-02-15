import React from "react";
import Display from "../Display/Display";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
const style = {
  display: "flex",
  alignItems: "center",
  jusifyContent: "center",
  height: "100vh",
};
function App() {
  return (
    <div className="App" style={style}>
      <div className="Calculator" style={{ margin: "0 auto" }}>
        <div
          style={{
            width: 435,
            height: 675,
            backgroundColor: "#9A9999",
            padding: "20px 30px",
            borderRadius: 20,
          }}
        >
          <Display />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

export default App;
