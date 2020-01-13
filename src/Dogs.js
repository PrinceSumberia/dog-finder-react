import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
	render() {
		return (
			<div className="Dogs">
				<h1 className="display-1 text-center mt-3 mb-5">Dog List!</h1>
				<div className="row">
					{this.props.dogs.map((dog) => (
						<div className="Dog col-lg-4 text-center" key={dog.name}>
							<img alt={dog.name} src={dog.src} />
							<h3 className="mt-3">
								<Link className="underline" to={`/dogs/${dog.name.toLowerCase()}`}>
									{dog.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Dogs;
