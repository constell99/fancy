import React from 'react';

import FilteredSidemenuItem from './FilteredSidemenuItem';

export default class Sidemenu extends React.PureComponent {
	render() {
		return (
			<aside className="sidemenu">
				<ul className="sidemenu__list">
					<FilteredSidemenuItem 
						sidemenuId="editProfile"
						icoName="user-circle-o" 
						text="Edit Profile" />
					<FilteredSidemenuItem 
						sidemenuId="preferences"
						icoName="cog" 
						text="Preferences" />
					<FilteredSidemenuItem 
						sidemenuId="password"
						icoName="lock" 
						text="Password" />
					<FilteredSidemenuItem 
						sidemenuId="notifications"
						icoName="bell-o" 
						text="Notifications" />
					<FilteredSidemenuItem 
						sidemenuId="connectedAccounts"
						icoName="window-restore" 
						text="Connected Accounts" />
				</ul>
				<ul className="sidemenu__list">
					<FilteredSidemenuItem
						sidemenuId="orders" 
						icoName="list-alt" 
						text="Orders" />
					<FilteredSidemenuItem 
						sidemenuId="payment"
						icoName="credit-card" 
						text="Payment" />
					<FilteredSidemenuItem 
						sidemenuId="shipping"
						icoName="truck" 
						text="Shipping" />
				</ul>
				<ul className="sidemenu__list last-list">
					<FilteredSidemenuItem
						sidemenuId="creditAndReferrals" 
						icoName="dollar" 
						text="Credits & Referrals" />
				</ul>
			</aside>
		)
	}
}