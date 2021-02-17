import React from "react";
import { clicked } from "../../context/calculatorAction";
import CalculatorContext from "../../context/calculatorContext";

const Button = (props) => {
  const { id, value, category } = props.button;

  const calculator = React.useContext(CalculatorContext);
  const handleClick = (e) => {
    clicked(
      calculator.dispatch,
      e.target.innerText,
      calculator.state.displayValue,
      calculator.state.evalutedValue
    );
  };
  return (
    <button
      className={category ? category : null}
      style={{ gridArea: `${id}` }}
      id={id}
      onClick={handleClick}
    >
      <span id="buttonText">{value}</span>
    </button>
  );
};

export default Button;
