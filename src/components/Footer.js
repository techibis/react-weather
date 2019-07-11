



import React from 'react';
import ReactDOM from 'react-dom';



const OrangeLetters = {
	color: 'blue',
	fontSize: '30px',
	display: 'inline',
	position: 'relative',
	top: '19px',
	left: '36px'
}

const thumbnail = {
	height: '200px',
	opacity: 7,
	borderRadius:'10px'
}

const headerclass = {
	height: '75px',
	backgroundColor: '#c0c0c0'
}




class Footer extends React.Component {
	render() {
		return (
			<footer style={headerclass}>
				
				<h3 style={OrangeLetters}>&copy; 2019 Techlaunch.io</h3>

			</footer>
		)
	}
}
export default Footer