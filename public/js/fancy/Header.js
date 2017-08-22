import React from 'react';

import FilteredNavItem from './FilteredNavItem';
import Username from './Username';

export default class Header extends React.PureComponent {
	render() {
		return (
			<header>
				<div className="header__search-box">
					<i className="fa fa-search" aria-hidden="true" />
					<input type="text" placeholder="Search Fancy" />
				</div>
				<nav className="header__nav">
					<ul>
						<FilteredNavItem 
							icoName="shopping-cart"
							id="cart" />
						<FilteredNavItem 
							icoName="inbox" 
							id="inbox" />
						<FilteredNavItem 
							icoName="bolt" 
							id="noti" />
						<FilteredNavItem 
							icoName="user" 
							id="user" />
						<Username />
					</ul>
				</nav>
				<h1>FANCY</h1>
			</header>
		)
	}	
}