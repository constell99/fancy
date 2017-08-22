import React from 'react';

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