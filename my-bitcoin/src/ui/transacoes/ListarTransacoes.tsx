import * as React from 'react';
import {NavLink} from 'react-router-dom';


function ListarTransacoes() {

    return(<div style={{marginTop: 10}}>
                <strong>Lista de Transações</strong>
                <br />
                <NavLink to='/transacoes/55'>ID 55</NavLink>
            </div>);
}

export default ListarTransacoes;