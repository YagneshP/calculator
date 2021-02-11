import React from "react"
import Display from "../Display/Display"
import ButtonGroup from "../ButtonGroup/ButtonGroup"
const style = {
	display:"flex",
	alignItems:"center",
	jusifyContent:"center",
	height:"100vh"
}
function App() {
	const[displayValue, setDisplayValue] = React.useState(0)
  return (
    <div className="App" style={style}>
      <div className="Calculator" style={{margin:"0 auto"}}>
        <Display displayValue={displayValue}/>
				<ButtonGroup/>
      </div>
    </div>
  );
}

export default App;
