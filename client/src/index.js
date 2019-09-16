import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import reducers from './reducers';


//Does reduxThunk allow actioncreater to produce an action to change
//the state of the application with the reducer?

//Redux is used to manage the state of the application
//Redux only contains 3 things to make it work
//Actions, Reducers, and Store


//What does the store do? 4 things, hold app state, get access to state, update state, handle listeners

//Holds application state
//allow Access toe state via getState()
//allow state to be Updated via dispatch(action)
//Registers listeners via subscribe(listener)
//Handle unregistering of listeners via function return subscribe(listener)
const store = createStore (reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.querySelector('#root'));
