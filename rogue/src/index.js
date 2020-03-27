import React from 'react';
import ReactDOM from 'react-dom';
import Main from './router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from "./rootreducer";

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
