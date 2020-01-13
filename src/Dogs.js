import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dogs extends Component {
	render() {
		return (
			<div>
				{this.props.dogs.map((dog) => (
					<div>
						<p>{dog.name}</p>
						<img alt={dog.name} src={dog.src} />
						<Link className="underline" to={`/dogs/${dog.name.toLowerCase()}`}>
							{dog.name}
						</Link>
					</div>
				))}
			</div>
		);
	}
}

export default Dogs;
