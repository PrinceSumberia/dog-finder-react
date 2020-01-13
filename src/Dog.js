import React, { Component } from 'react';

class Dog extends Component {
	render() {
		const { dog } = this.props;
		console.log(dog);
		return (
			<div>
				<p>{dog.name}</p>
				<img alt={dog.name} src={dog.src} />
				<p>Age: {dog.age}</p>
				<ul>{dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
			</div>
		);
	}
}

export default Dog;
