import * as React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import TransacaoPage from './TransacaoPage';
import ListarTransacoes from './ListarTransacoes';
import {Button} from 'antd';


function Transacoes() {


    return(
        <React.Fragment>
            <h2>Transações</h2>
            <NavLink to='/transacoes/nova'>
                <Button type="primary" icon="plus-circle" size="large">Nova</Button>
            </NavLink>
            <Switch>
                <Route exact path="/transacoes/nova" component={TransacaoPage} />
                <Route exact path="/transacoes/:id" component={TransacaoPage} />
            </Switch>
            <ListarTransacoes />
        </React.Fragment>
    );
}

export default Transacoes;