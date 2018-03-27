import * as React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import NovaCategoria from './NovaCategoria';
import VerCategoria from './VerCategoria';
import ListarCategorias from './ListarCategorias';
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
            <Route path="/categorias/" component={ListarCategorias} />
        </React.Fragment>
    );
}

export default Categorias;