import React from "react";
import Button from "../Button/Button";
import "./ButtonGroup.css"
const ButtonGroup = (props) => {
  const buttons = [
    { id: "zero", value: 0 },
    { id: "one", value: 1 },
    { id: "two", value: 2 },
    { id: "three", value: 3 },
    { id: "four", value: 4 },
    { id: "five", value: 5 },
    { id: "six", value: 6 },
    { id: "seven", value: 7 },
    { id: "eight", value: 8 },
    { id: "nine", value: 9 },
    { id: "equals", value: "=", category: "action" },
    { id: "add", value: "+", category: "action" },
    { id: "subtract", value: "-", category: "action" },
    { id: "multiply", value: "*", category: "action" },
    { id: "divide", value: "/", category: "action" },
    { id: "decimal", value: "." },
    { id: "clear", value: "AC" },
  ];
  

  return (
    <div className="ButtonGroup">
      {buttons.map((button) => (
        <Button key={button.id} button={button} />
      ))}
    </div>
  );
};

export default ButtonGroup;
