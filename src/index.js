import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './containers/App';
import { store, persistor } from './redux/store';

// * The Provider is the parent component of everything inside our application.
// * And we can access to everythings related to the store that we put all of the actual code we want to store on our reading stage.
const app = (
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
