export const changeSidemenu = (sidemenu) => {
	return {
		type: 'CHANGE_SIDEMENU',
		sidemenu
	}
}

export const changeNav = (nav) => {
	return {
		type: 'CHANGE_NAV',
		nav
	}
};

export const login = () => {
	return { type: 'LOGIN_REQUESTED' };
};

export const preferenceRequest = (data) => {
	return { 
		type: 'PREFERENCES_REQUESTED',
		data
	}
};