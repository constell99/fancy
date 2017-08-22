import React from 'react';

import Sidemenu from './Sidemenu';
import FilteredContents from './FilteredContents';

export default class Main extends React.PureComponent {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="main">
				<Sidemenu />
				<FilteredContents />
			</div>
		)
	}
}