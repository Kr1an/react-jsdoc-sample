import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import SwitchesFactory from './components/switches-factory'

import store from './store'

const App = () =>  (
    <Provider store={store}>
        <SwitchesFactory />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));