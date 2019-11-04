import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'; 
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();


const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
