if (!window.fetch) {
	const fetch = require('whatwg-fetch');
}

export const login = () => {
	return fetch('/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
	.then(statusHelper)
	.then(response => {
		return response.json(); 
	})
	.catch(error => {
		throw error;
	})

}

export const preferencesRequest = (data) => {
	return fetch('/preference/update', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
		credentials: 'include'
	})
	.then(statusHelper)
	.then(response => { 
		return response.json(); 
	})
	.catch(error => {
		throw error;
	})
}

const statusHelper = (response) => {
	if (response.status === 200) {
		return response;
	} else {
		return Promise.reject(new Error(response.statusText));
	}
}