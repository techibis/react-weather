



import React from 'react';
import ReactDOM from 'react-dom';
import Rain from '../images/rain.jpg';
import Snow from '../images/snow.jpg';
import Sun from '../images/sun.jpg';
import Chilly from '../images/chilly.jpg';


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




class MainContent extends React.Component {
	render() {
		return (
			<section>
				<h1>The weather forecast is:</h1>
				<h3>Sunday is Sunny</h3>
				<img src={Sun}/>
				<h3>Monday is Rain</h3>
				<img src={Rain}/>
				<h3>Tuesday is Brisk and Cool</h3>
				<img src={Chilly}/>
				<h3>Wednesday is Cold</h3>
				<img src={Snow}/>
			</section>
		)
	}
}
export default MainContent