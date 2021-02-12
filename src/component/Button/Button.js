import React from 'react'

// const style = {
// 	width:75,
// 	height:75,
// 	borderRadius:15,
// 	backgroundColor:"#3D1D1D",
// 	textAlign:"center",
// 	fontSize:"2rem",
// 	color:"#ffffff",
// 	border:"none"
// }
const Button = (props) => {
	const{id, value, category} = props.button
	return (
		<button  className={category ?  category : null} style={{gridArea:`${id}`}} id={id} onClick={(e)=>props.handleClick(e.target.innerText)}>
			{value}
		</button>
	)
}

export default Button
