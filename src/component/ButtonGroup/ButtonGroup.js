import React from 'react'
import Button from '../Button/Button'

const ButtonGroup = () => {

	const buttons = [
		{id:"zero",value: 0},
		{id:"one",value: 1},
		{id:"two",value: 2},
		{id:"three",value: 3},
		{id:"four",value: 4},
		{id:"five",value: 5},
		{id:"six",value: 6},
		{id:"seven",value: 7},
		{id:"eight",value: 8},
		{id:"nine",value: 9},
		{id:"equals",value: "=", category:"action"},
		{id:"add",value: "+",category:"action"},
		{id:"substract",value: "-",category:"action"},
		{id:"multiple",value: "*",category:"action"},
		{id:"divide", value:"/",category:"action"},
		{id:"decimal", value:"."},
		{id:"clear", value:"AC"}
	]
const style= {
	display: "grid",
	gridTemplateColumns:`1fr 1fr 1fr 1fr`,
	gridTemplateRows:`1fr 1fr 1fr 1fr` ,
	gridTemplateAreas:
	`"clear clear divide multiple"
	"seven eight nine substract"
	"four five six add"
	"one two three equals"
	"zero zero decimal equals"`,
	width:400, 
	height:500, 
	borderRadius:5,
	backgroundColor:"#C4C4C4",
	justifyItems:"center",
	padding:"15px 15px"
}

	return (
		<div style={style}>
			{buttons.map(button => <Button key={button.id} button={button}/>)}
		</div>
	)
}

export default ButtonGroup
