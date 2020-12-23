import React from 'react';
import { render } from 'react-dom';

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import CounterContainer from './components/counterContainer';
import HomePageContainer from './components/homePageContainer';


import counterReducer  from './components/counterReducer';
import userReducer  from './components/userReducer';


// https://daveceddia.com/how-does-redux-work/
import CounterOne from './components/counterOne';

const logger = (store) => (next) => (action) =>{
	console.log("action fired", action);
	next(action);
};

const middleware = applyMiddleware(thunk, logger);

const reducers = combineReducers({
    user: userReducer,
    counterRed: counterReducer

})
const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>

    <HomePageContainer/>
   </Provider>

 // <CounterOne></CounterOne>
);

render(<App />, document.getElementById('root'));