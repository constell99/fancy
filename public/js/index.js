import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import fancyApp from './fancy/reducers';
import fancySaga from './fancy/sagas';

import Fancy from './fancy/Fancy';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
	fancyApp,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fancySaga);

ReactDOM.render(
	<Provider store={ store }>
		<Fancy />
	</Provider>, 
	document.getElementById('fancy')
);