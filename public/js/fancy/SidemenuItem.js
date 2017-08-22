import React from 'react';

export default class SidemenuItem extends React.PureComponent {
	handleClick() {
		const { sidemenuId, onClick } = this.props;
		onClick(sidemenuId);
	}

	render() {
		const { 
			icoName, 
			text,
			sidemenuId,
			onClick,
			active
		} = this.props;

		const activeClass = active ? ' active': '';
		
		return (
			<li className={ "sidemenu__list__item" + activeClass }
				key={ sidemenuId } >
				<a href="#" onClick={ this.handleClick.bind(this) }>
					<span className="sidemenu__list__item__ico-wrap">
						<i className={ "sidemenu__list__item__ico fa fa-" + icoName } />
					</span>
					<span className="sidemenu__list__item__label">{ text }</span>
				</a>
			</li>
		)
	}
}