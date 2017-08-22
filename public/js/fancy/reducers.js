import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
	nav: null,
	sidemenu: 'preferences',
	username: gUsername,
	preferences: {}
};

const nav = (state = initialState.nav, action) => {
	switch (action.type) {
		case 'CHANGE_NAV':
			return action.nav;

		default:
			return state;
	}
};

const sidemenu = (state = initialState.sidemenu, action) => {
	switch (action.type) {
		case 'CHANGE_SIDEMENU':
			return action.sidemenu;

		default:
			return state;
	}
};

const username = (state = initialState.username, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return action.username;

		default:
			return state;
	}
};

const preferences = (state = initialState.preferences, action) => {
	switch (action.type) {
		case 'PREFERENCES_REQUEST_SUCCESS':
			return action.preferences

		default:
			return state;
	}
};

const fancyApp = combineReducers({
	nav, 
	sidemenu,
	username,
	preferences,
	form: formReducer
});

export default fancyApp;