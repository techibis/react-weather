



import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png';



const OrangeLetters = {
	color: 'blue',
	fontSize: '30px',
	display: 'inline',
	position: 'relative',
	top: '-100px',
	left: '36px'
}

const thumbnail = {
	height: '200px',
	opacity: 7,
	borderRadius:'10px'
}

const headerclass = {
	height: '200px',
	backgroundColor: '#c0c0c0'
}




class Header extends React.Component {
	render() {
		return (
			<header style={headerclass}>
				
				<img style={thumbnail} src={logo} />
				<h3 style={OrangeLetters}>Instructions: To see more details for a certain day, click a day below.</h3>

			</header>
		)
	}
}

export default Header