import React from 'react'

const buttonStyle = {
	padding: '10px',
	backgroundColor: 'green',
	width: '200px',
	color: 'white',
	borderRadius: '4px',
}
const Button: React.FC = (): React.ReactElement => {
	return <div style={buttonStyle}>Add Event</div>
}

export default Button
