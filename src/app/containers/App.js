import React, { Component } from 'react';
import RouterMap from '../router/routerMap'
import store from '../store/index'

import {Provider,} from 'react-redux'

console.log('store-->',store)


class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider  store={store}>
                    <RouterMap/>
                </Provider>
            </div>
        );
    }
}

export default App;
