import React from 'react';
import Nav from './Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dog from './Dog';
import Dogs from './Dogs';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';
import './App.css';

class App extends React.Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 3,
				src: hazel,
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.'
				]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.'
				]
			}
		]
	};
	render() {
		const getDog = (props) => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
			return <Dog {...props} dog={currentDog} />;
		};
		return (
			<div className="App">
				<Nav dogs={this.props.dogs} />
				<Switch>
					<Route exact path="/dogs" render={() => <Dogs dogs={this.props.dogs} />} />
					<Route exact path="/dogs/:name" render={getDog} />} />
					<Redirect to="/dogs" />
				</Switch>
			</div>
		);
	}
}

export default App;
