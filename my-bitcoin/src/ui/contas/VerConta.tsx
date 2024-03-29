import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps {
    id: number;
}
interface Props extends RouteComponentProps<RouteProps> {
}
/*
EXEMPLO PARA PEGAR DADOS DA ROTA QUANDO O COMPONENTE É CLASS EXTENDS REACT
*/
class VerConta extends React.Component<Props> {
   
    render() {

        const {match} = this.props;

        const id = match.params.id;

        return(<h1>Ver Conta ({id ? `#${id}` : 'novo'})</h1>);
    }
}

export default VerConta;