import React from "react";
import * as actionTypes from "../actionTypes/actionTypes";
import CalculatorContext from "./calculatorContext";

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ENTER:
      return {
        ...state,
        displayValue: action.payload,
				evalutedValue: "",
      };
    case actionTypes.EVALUTE:
      return {
        ...state,
        displayValue: action.payload,
        evalutedValue: action.payload,
      };
    case actionTypes.START_ZERO:
      return {
        ...state,
        displayValue: action.payload,
      };
    case actionTypes.START_DECIMAL:
      return {
        ...state,
        displayValue: "",
      };
    case actionTypes.RESET:
      return {
        ...state,
        enteredValue: "",
        displayValue: "",
      };
    default:
      return state;
  }
};

const CalculatorState = (props) => {
  const intialState = {
    displayValue: "",
    enteredValue: "",
    evalutedValue: "",
  };

  const [state, dispatch] = React.useReducer(calculatorReducer, intialState);
  return (
    <CalculatorContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;
