import React from 'react';
import ReactDOM from 'react-dom';
import Main from './router';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from "./_rootReducer";

const App = () => (
    <div>
        <Main />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
