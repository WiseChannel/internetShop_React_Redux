import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {routerMiddleware, ConnectedRouter} from "connected-react-router";
import {Provider} from 'react-redux'

import createRootReducer from './components/redusers'
import Layout from "./components/containers/layout";


const history = createBrowserHistory()
const middleware = [thunk, routerMiddleware(history)]
const store = createStore(                                  //Подготовка store
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

