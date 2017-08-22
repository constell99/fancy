import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

class Username extends React.PureComponent {
	handleClick() {
		const { dispatch, username } = this.props;
		if (username) {
			return;
		} 

		dispatch(login());
	}

	render() {
		const { username } = this.props;
		const displayText = username ? 'Welcome, ' + username: 'Click To Login';

		return (
			<li className="header__nav__username">
				<a href="#" onClick={ this.handleClick.bind(this) }>
					<span>{ displayText }</span>
				</a>
			</li>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		username: state.username
	}
}

Username = connect(mapStateToProps)(Username);
export default Username;
