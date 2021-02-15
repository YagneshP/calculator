import React from "react";
import Button from "../Button/Button";

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
  const style = {
    display: "grid",
    gridTemplateColumns: `1fr 1fr 1fr 1fr`,
    gridTemplateRows: `1fr 1fr 1fr 1fr`,
    gridTemplateAreas: `"clear clear divide multiply"
	"seven eight nine subtract"
	"four five six add"
	"one two three equals"
	"zero zero decimal equals"`,
    width: 400,
    height: 500,
    borderRadius: 5,
    backgroundColor: "#C4C4C4",
    justifyItems: "center",
    padding: "15px 15px",
    marginTop: 35,
    boxShadow:
      "inset -2px -2px 2px rgba(0, 0, 0, 0.25), inset 2px 2px 2px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div style={style}>
      {buttons.map((button) => (
        <Button key={button.id} button={button} />
      ))}
    </div>
  );
};

export default ButtonGroup;
