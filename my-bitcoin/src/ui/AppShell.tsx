import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppLayout from './AppLayout';
import store from '../infra/store';

class AppShell extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppLayout />
                </BrowserRouter>
            </Provider>
        );

    }
}

export default AppShell;