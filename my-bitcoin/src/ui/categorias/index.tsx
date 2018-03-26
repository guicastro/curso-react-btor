import * as React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import NovaCategoria from './NovaCategoria';
import VerCategoria from './VerCategoria';
import {Button} from 'antd';


function Categorias() {

    return(
        <React.Fragment>
            <h2>Categorias</h2>
            <NavLink to='/categorias/nova'>
                <Button type="primary" icon="plus-circle" size="large">Nova</Button>
            </NavLink>
            <Switch>
                <Route exact path="/categorias/nova" component={NovaCategoria} />
                <Route exact path="/categorias/:id" component={VerCategoria} />
            </Switch>
            <div style={{marginTop: 10}}>
                <strong>Lista de Categorias</strong>
                <br />
                <NavLink to='/categorias/12'>ID 12</NavLink>
            </div>
        </React.Fragment>
    );
}

export default Categorias;