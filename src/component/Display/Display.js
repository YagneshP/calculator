import React from 'react'
// const style = {
// 								width:"100%", 
// 								height:70,
// 								borderRadius:5,
// 								backgroundColor:"#9AC899",
// 								boxShadow:"inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
// 								margin:"20px auto",
// 								textAlign:"right"
// 							}
const Display = (props) => {
	return (
		<div id="display">
			{props.displayValue}
		</div>
	)
}

export default Display
