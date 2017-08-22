import React from 'react';
import PropTypes from 'prop-types';

export default class NavItem extends React.PureComponent {
	render() {
		const {
			id,
			icoName,
			onClick,
			active
		} = this.props;

		const activeClass = active ? ' active': '';

		return (
			<li className={ "header__nav__item" + activeClass }>
				<a href="#" onClick={ () => { onClick(id) }}>
					<i className={ "fa fa-" + icoName } />
				</a>
			</li>
		)
	}	
}

NavItem.propTypes = { 
	id: PropTypes.string,
	icoName: PropTypes.string,
	// https://github.com/facebook/prop-types/issues/76
	// onClick: PropTypes.func,
	active: PropTypes.bool
}