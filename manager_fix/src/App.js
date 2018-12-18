import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyC10TangG6c3LYs_wgSW2qqsNlYW19u4bM',
            authDomain: 'manager-9b08d.firebaseapp.com',
            databaseURL: 'https://manager-9b08d.firebaseio.com',
            projectId: 'manager-9b08d',
            storageBucket: 'manager-9b08d.appspot.com',
            messagingSenderId: '327743773936'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
