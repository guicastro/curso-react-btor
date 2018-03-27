import * as React from 'react';
import {NavLink} from 'react-router-dom';


function ListarContas() {

    return(<div style={{marginTop: 10}}>
                <strong>Lista de Contas</strong>
                <br />
                <NavLink to='/contas/415'>ID 415</NavLink>
            </div>);
}

export default ListarContas;