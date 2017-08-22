import 'babel-polyfill';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login, preferencesRequest } from './api';

function* fetchLogin(action) {
	try {
		const result = yield call(login);
		yield put({ type: 'LOGIN_SUCCESS', username: result.username });
	} catch (e) {
		yield put({ type: 'LOGIN_FAILED'});
	}
}

function* fetchPreferences(action) {
	try {
		const result = yield call(preferencesRequest, action.data);
		yield put({ type: 'PREFERENCES_REQUEST_SUCCESS', preferences: result.preferences });
		alert('saved'); // <- this is anti-pattern (from che)

	} catch (e) {
		yield put({ type: 'PREFERENCES_REQUEST_FAILED' });
		alert('failed');
	}
}

function* fancySaga() {
	yield takeLatest('LOGIN_REQUESTED', fetchLogin);
	yield takeLatest('PREFERENCES_REQUESTED', fetchPreferences);
}

export default fancySaga;