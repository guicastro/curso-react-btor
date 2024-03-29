import * as React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import NovaConta from './NovaConta';
import VerConta from './VerConta';
import ListarContas from './ListarContas';
import {Button} from 'antd';


function Contas() {

    return(
        <React.Fragment>
            <h2>Contas</h2>
            <NavLink to='/contas/nova'>
                <Button type="primary" icon="plus-circle" size="large">Nova</Button>
            </NavLink>
            <Switch>
                <Route exact path="/contas/nova" component={NovaConta} />
                <Route exact path="/contas/:id" component={VerConta} />
            </Switch>
            <ListarContas />
        </React.Fragment>
    );
}

export default Contas;