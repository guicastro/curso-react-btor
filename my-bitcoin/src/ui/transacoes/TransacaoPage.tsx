import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps {
    id: number;
}
interface Props extends RouteComponentProps<RouteProps> {
}
/*
EXEMPLO QUANDO A PÁGINA DE NOVA TRANSAÇÃO E EDITAR TRANSAÇÃO SÃO OS MESMOS COMPONENTES
*/

class TransacaoPage extends React.Component<Props> {

    render() {

        const {match} = this.props;

        const id = match.params.id;

        return(<h1>Página de Transações ({id ? `#${id}` : 'novo'})</h1>);
    }
}

export default TransacaoPage;