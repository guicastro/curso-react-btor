import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';

function ErrorsRouter() {

    return(
        <Switch>
            <Route path="error/500" />
            <Route path="/error/404" component={Error404} />
        </Switch>
    );
}

export default ErrorsRouter;