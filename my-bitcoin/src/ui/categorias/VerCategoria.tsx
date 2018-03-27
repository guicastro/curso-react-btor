import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps {
    id: number;
}
interface Props extends RouteComponentProps<RouteProps> {
}
/*
EXEMPLO PARA PEGAR DADOS DA ROTA QUANDO O COMPONENTE É FUNCTION
*/

function VerCategoria(props: Props) {
   
    const {match} = props;

    const id = match.params.id;

    return(<h1>Ver Categoria ({id ? `#${id}` : 'novo'})</h1>);
}

export default VerCategoria;