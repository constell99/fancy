import React from 'react';

import Header from './Header';
import Main from './Main';

export default class Fancy extends React.PureComponent {
	render() {
		return (
			<div id="wrap">
				<Header />
				<Main />
			</div>
		)
	}
}