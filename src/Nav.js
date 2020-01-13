import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	render() {
		const dog = this.props.dogs.map((dog, i) => (
			<NavLink key={i} exact activeClassName="active-menu" to={`/dogs/${dog.name.toLowerCase()}`}>
				{dog.name}
			</NavLink>
		));
		return <div>{dog}</div>;
	}
}

export default Nav;
