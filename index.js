import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import App from './containers/App';
import 'tachyons';
// import { robots } from './robots';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { searchRobots,requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

console.log("root reducer executed");
const rootReducer = combineReducers({ searchRobots,requestRobots });
console.log("Logger created");
const logger = createLogger();
console.log("Store created");
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));
// ReactDOM.render(<Hello greeting={'React is in your service.'}/>, document.getElementById('root'));
serviceWorker.unregister();
