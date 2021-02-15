import React from "react";
import CalculatorContext from "../../context/calculatorContext";

const Display = (props) => {
  const calculator = React.useContext(CalculatorContext);
  // 	const zeroStartReg = /^(0\d)/g
  // 	const decimalReg = /^\./g
  // 	const consecutiveDecimalReg = /\.{2}/g
  // 	const moreOperator = /([+,*,/,-][+,*,/])/g
  // 	const [displayValue, setDisplayValue] = React.useState("")
  // 	const[result, setResult] = React.useState(displayValue);
  // 	const[startValue, setStartValue] =React.useState(0);

  // 	React.useEffect(()=>{
  // 				if(enteredValue === "="){
  // 					if(displayValue === ""){
  // 						console.log("[calling while equals sign and displayValue 0]")
  // 						setResult(0)
  // 					} else{
  // 						const operatorArray =displayValue.match(moreOperator);
  // 						if(operatorArray){
  // 							let modifiedDisplayValue = 	operatorArray.reduce((acc, curr)=>{
  // 								 let newString = acc.replace(curr, curr.slice(curr.length-1));
  // 									console.log(newString)
  // 									return newString
  // 									// console.log(displayValue.replace(el,el.slice(el.length-1)))
  // 								},displayValue) ;
  // 								let modifiedNumber  = eval(modifiedDisplayValue);
  // 								console.log("modifiednumber",typeof modifiedNumber);
  // 								// setDisplayValue("");
  // 								setDisplayValue(modifiedNumber);
  // 							} else{
  // 								setDisplayValue(eval(displayValue))
  // 							}
  // 					}
  // 				}else if(enteredValue === "AC"){
  // 					// setDisplayValue("0");
  // 					setDisplayValue("");
  // 				}
  // 				else{
  // 					setDisplayValue(v => v + enteredValue)
  // 				}
  // 			console.log("[renderning Display]")
  // 		},[enteredValue])

  // React.useEffect(()=>{
  // 	if(displayValue !== ""){
  // 		if(zeroStartReg.test(displayValue) || decimalReg.test(displayValue)){
  // 			console.log("callliing...")
  // 			setDisplayValue(v => "")
  // 	}	else if(consecutiveDecimalReg.test(displayValue)){ //try without checking condition
  // 			setDisplayValue(displayValue.replace(consecutiveDecimalReg,"."))
  // }
  // 	}

  // },[displayValue])

  // 			console.log(displayValue)
  // 		// console.log()
  return (
    <div id="display">
      {calculator.state.displayValue === "" ? 0 : calculator.state.displayValue}
    </div>
  );
};

export default Display;
