import * as actionTypes from "../actionTypes/actionTypes";
const zeroStartReg = /^(0[1-9])/g;
const doubleZero = /^(00)/g;
const decimalReg = /^\./g;
const endDecimal = /.$/g;
const consecutiveDecimalReg = /\.{2}/g;
const multipleDecimalReg = /\d*\.\d*\./g;
const moreOperator = /([+,*,\/,\-]{1,}[+,*,\/])/g;
const operatorGroup = /[+\-\/\*]/;

export const clicked = (
  dispatch,
  enteredValue,
  displayValue,
  evalutedValue
) => {
  if (enteredValue !== "=") {
    let newValue = displayValue + enteredValue;
    if (evalutedValue !== "" && operatorGroup.test(enteredValue)) {
      dispatch({
        type: actionTypes.ENTER,
        payload: evalutedValue + enteredValue,
      });
    } 
		else if (evalutedValue !== "" && enteredValue !== "." && enteredValue !== "AC") {
			console.log("enteredValue", enteredValue)
      dispatch({
        type: actionTypes.ENTER,
        payload: enteredValue,
      });
    }
    else if (enteredValue === "AC") {
      dispatch({
        type: actionTypes.RESET,
      });
    } else if (zeroStartReg.test(newValue)) {
      dispatch({
        type: actionTypes.START_ZERO,
        payload: enteredValue,
      });
    } else if (decimalReg.test(newValue) || doubleZero.test(newValue)) {
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
      dispatch({
        type: actionTypes.ENTER,
        payload: displayValue,
      });
    } else {
      dispatch({
        type: actionTypes.ENTER,
        payload: newValue,
      });
    }
  } else {
    if (displayValue === "") {
      dispatch({
        type: actionTypes.RESET,
      });
    } else {
			let currentValue =
      typeof displayValue === "number" ? " " + displayValue : displayValue;
      const operatorArray = currentValue.match(moreOperator);
      if (operatorArray) {
        let modifiedDisplayValue = operatorArray.reduce((acc, curr) => {
          let newString = acc.replace(curr, curr.slice(curr.length - 1));
          return newString;
        }, currentValue);
				console.log(modifiedDisplayValue)
        let modifiedNumber =
          Math.round(eval(modifiedDisplayValue) * 10000) / 10000; //Math.round(val*10000)/10000
        dispatch({
          type: actionTypes.EVALUTE,
          payload: modifiedNumber,
        });
      } else {
        let evalVal = Math.round(eval(currentValue) * 10000) / 10000;
        dispatch({
          type: actionTypes.EVALUTE,
          payload: evalVal,
        });
      }
    }
  }
};

