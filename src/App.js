import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';

const App = () => {
    return (
        // <Provider store={() => []} >
            <Fragment>
                <Header headerText={'This is some text'} />
            </Fragment>
        // </Provider>
    );
};

export default App;