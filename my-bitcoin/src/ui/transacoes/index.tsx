import * as React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import NovaTransacao from './NovaTransacao';
import VerTransacao from './VerTransacao';
import {Button} from 'antd';


function Transacoes() {


    return(
        <React.Fragment>
            <h2>Transações</h2>
            <NavLink to='/transacoes/nova'>
                <Button type="primary" icon="plus-circle" size="large">Nova</Button>
            </NavLink>
            <Switch>
                <Route exact path="/transacoes/nova" component={NovaTransacao} />
                <Route exact path="/transacoes/:id" component={VerTransacao} />
            </Switch>
            <div style={{marginTop: 10}}>
                <strong>Lista de Transações</strong>
                <br />
                <NavLink to='/transacoes/55'>ID 55</NavLink>
            </div>
        </React.Fragment>
);
}

export default Transacoes;