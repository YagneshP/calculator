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
	const[startValue, setStartValue] =React.useState(0);
	const[displayValue, setDisplayValue] = React.useState("");
	const[result, setResult] = React.useState("");
	const zeroStartReg = /^(0\d?)/g
	React.useEffect(()=>{
		console.log("useEffectcalled", displayValue)
		if(displayValue !== "" ){
			if(zeroStartReg.test(displayValue)){
				setDisplayValue("")
				setStartValue(0)
			}	else{
				setStartValue(displayValue)
			}	
			
			
		}else if(result !== ""){
			setStartValue(result)
		}
			
	},[displayValue,result,zeroStartReg])

	const handleClick = (value) =>{
		if(value === "="){
			if(displayValue === ""){
				setResult(0)
			}else{
				let number  = eval(displayValue);
				console.log("number", number);
				setDisplayValue("");
				setResult(number);
			}
		
		} else if(value === "AC"){
			setDisplayValue("0");
			setStartValue(0);
			setResult("")
		}
		else{
			setDisplayValue(v => v + value);	
		}

		
	}
  return (
    <div className="App" style={style}>
      <div className="Calculator" style={{margin:"0 auto"}}>
				<div style={{width:435, height:675, backgroundColor:"#9A9999", padding:"20px 30px", borderRadius:20	}}>
					<Display displayValue={startValue}/>
					<ButtonGroup handleClick = {handleClick}/>
				</div>
      </div>
    </div>
  );
}

export default App;
