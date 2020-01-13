import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dog from './Dog';
import Dogs from './Dogs';

class Routes extends Component {
	render() {
		const getDog = (props) => {
			let name = props.match.params.name;
			let currentDog = this.props.dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
			return <Dog {...props} dog={currentDog} />;
		};
		return (
			<Switch>
				<Route exact path="/dogs" render={() => <Dogs dogs={this.props.dogs} />} />
				<Route exact path="/dogs/:name" render={getDog} />} />
				<Redirect to="/dogs" />
			</Switch>
		);
	}
}

export default Routes;
