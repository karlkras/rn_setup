import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import ducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore(ducers)} >
            <Fragment>
                <Header headerText={'This is some text'} />
            </Fragment>
        </Provider>
    );
};

export default App;
