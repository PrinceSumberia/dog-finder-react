import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		const dog = this.props.dogs.map((dog, i) => (
			<li className="nav-item" key={dog.name}>
				<NavLink exact className="nav-link" to={`/dogs/${dog.name.toLowerCase()}`}>
					{dog.name}
				</NavLink>
			</li>
		));
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/dogs">
					Dog App
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink exact to="/dogs" className="nav-link">
								Home
							</NavLink>
						</li>
						{dog}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
