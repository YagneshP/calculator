import React from "react";
import CalculatorContext from "./calculatorContext";
import * as actionTypes from "../actionTypes/actionTypes";
const zeroStartReg = /^(0[1-9])/g;
const doubleZero = /^(00)/g;
const decimalReg = /^\./g;
const endDecimal = /.$/g;
const consecutiveDecimalReg = /\.{2}/g;
const multipleDecimalReg = /\d*\.\d*\./g;
const moreOperator = /([+,*,/,-][+,*,/])/g;
const operatorGroup = /[+\-\/\*]/;
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

export const clicked = (
  dispatch,
  enteredValue,
  displayValue,
  evalutedValue
) => {
  if (enteredValue !== "=") {
    let newValue = displayValue + enteredValue;
    console.log("operatorGroup", operatorGroup.test(evalutedValue));
    console.log(
      "operatorGroup1",
      evalutedValue !== "" && operatorGroup.test(evalutedValue)
    );
    if (evalutedValue !== "" && operatorGroup.test(evalutedValue)) {
      dispatch({
        type: actionTypes.ENTER,
        payload: evalutedValue + enteredValue,
      });
    } else if (
      evalutedValue !== "" &&
      enteredValue !== "." &&
      enteredValue !== "AC"
    ) {
      dispatch({
        type: actionTypes.ENTER,
        payload: enteredValue,
      });
    }
    // console.log("hiiiii",enteredValue)

    // console.log("newValue At start",newValue)
    // console.log("displayValue At start",displayValue)
    // console.log("enteredValue At start",enteredValue)
    else if (enteredValue === "AC") {
      dispatch({
        type: actionTypes.RESET,
      });
    } else if (zeroStartReg.test(newValue)) {
      console.log("callliing...", newValue);
      dispatch({
        type: actionTypes.START_ZERO,
        payload: enteredValue,
      });
    } else if (decimalReg.test(newValue) || doubleZero.test(newValue)) {
      console.log("callliing..for .");
      dispatch({
        type: actionTypes.START_DECIMAL,
      });
    } else if (consecutiveDecimalReg.test(newValue)) {
      newValue = newValue.replace(consecutiveDecimalReg, ".");
      dispatch({
        type: actionTypes.ENTER,
        payload: newValue,
      });
    } else if (multipleDecimalReg.test(newValue)) {
      //checking  multiple(".")
      console.log("not allowing muliple{.}");
      dispatch({
        type: actionTypes.ENTER,
        payload: displayValue,
      });
    } else {
      console.log("newValue after all test", newValue);
      dispatch({
        type: actionTypes.ENTER,
        payload: newValue,
      });
    }
  } else {
    if (displayValue === "") {
      console.log("[calling while equals sign and displayValue 0]");
      dispatch({
        type: actionTypes.RESET,
      });
    } else {
      console.log("after result pressing =", displayValue);
      console.log("type of", typeof displayValue);

      let currentValue =
        typeof displayValue === "number" ? " " + displayValue : displayValue;
      console.log("before adding 0", currentValue);
      console.log("test", endDecimal.test(currentValue));
      if (endDecimal.test(currentValue)) {
        currentValue = currentValue + 0;
      }
      console.log("typeof currentValue", typeof currentValue);
      const operatorArray = currentValue.match(moreOperator);
      if (operatorArray) {
        let modifiedDisplayValue = operatorArray.reduce((acc, curr) => {
          let newString = acc.replace(curr, curr.slice(curr.length - 1));
          console.log(newString);
          return newString;
        }, currentValue);
        let modifiedNumber =
          Math.round(eval(modifiedDisplayValue) * 10000) / 10000; //Math.round(val*10000)/10000
        console.log("modifiednumber", modifiedNumber);
        dispatch({
          type: actionTypes.EVALUTE,
          payload: modifiedNumber,
        });
      } else {
        console.log("evaluting display value", currentValue);
        console.log("evaluted display value", eval(currentValue));
        let evalVal = Math.round(eval(currentValue) * 10000) / 10000;
        console.log(evalVal);
        dispatch({
          type: actionTypes.EVALUTE,
          payload: evalVal,
        });
      }
      console.log("after adding 0", currentValue);
    }
  }
};

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
