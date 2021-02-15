import React from "react";
import CalculatorContext from "../../context/calculatorContext";

const Display = (props) => {
  const calculator = React.useContext(CalculatorContext);
  return (
    <div id="display">
      {calculator.state.displayValue === "" ? 0 : calculator.state.displayValue}
    </div>
  );
};

export default Display;
