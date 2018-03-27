import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Contas from './contas';
import Categorias from './categorias';
import Transacoes from './transacoes';
import ErrorsRouter from './error';

class Router extends React.Component {

    render() {

        return (<React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/login" component={Login} />
                        <Route path="/contas" component={Contas} />
                        <Route path="/categorias" component={Categorias} />
                        <Route path="/transacoes" component={Transacoes} />
                        <Redirect to="error/404"  />
                    </Switch>
                    <ErrorsRouter/>
            </React.Fragment>
        );
    }
}

export default Router;