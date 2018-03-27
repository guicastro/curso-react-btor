import * as React from 'react';
import {RouteComponentProps /*,withRouter*/} from 'react-router-dom';
import {Table} from 'antd';

const categorias = [
    {id: 1, nome: "Contas da Casa"},
    {id: 2, nome: "Viagens"},
    {id: 3, nome: "Supermecado"},
    {id: 4, nome: "Lazer"},
    {id: 5, nome: "Outros"},
];

function ListarCategorias(props: RouteComponentProps<{}>) {

    const {history} = props;

    return(<div style={{marginTop: 10}}>
                <strong>Lista de Categorias</strong>
                <br />
                <Table 
                    onRowClick={(ev, index) => history.push(`/categorias/${categorias[index].id}`)}
                    dataSource={categorias} columns={[
                    {
                        key: "id",
                        dataIndex: "id",
                        title: "#"
                    },
                    {
                        key: "nome",
                        dataIndex: "nome",
                        title: "Nome"
                    },
                    {
                        key: "actions",
                        dataIndex: "actions",
                        title: ""
                    },
                ]}
                />
            </div>);
}

/*
NOTE: O EXEMPLO ABAIXO SER PARA QUANDO SE QUER ROUTERIZAR UM COMPONENTE FORA DA ROTA, DESTA 
FORMA SERÁ POSSÍVEL PASSAR OS DADOS DA ROTA PARA O COMPONENTE
NESTE EXEMPLO, DENTRO DO ListarCategorias AO INVÉS DE DESENAR A TABLE, ADICIONA SIMPLESMENTE
O COMPONENTE CategoriaPage QUE É O withRouter

function _CategoriasTable(props: RouteComponentProps<{}>) {

    const {history} = props;
    
    return(<Table 
                onRowClick={(ev, index) => history.push(`/categorias/${categorias[index].id}`)}
                dataSource={categorias} columns={[
                {
                    key: "id",
                    dataIndex: "id",
                    title: "#"
                },
                {
                    key: "nome",
                    dataIndex: "nome",
                    title: "Nome"
                },
                {
                    key: "actions",
                    dataIndex: "actions",
                    title: ""
                },
            ]}
            />);
}

const CategoriasTable = withRouter(_CategoriasTable);
/*-- utilizado para "routerizar" um componente que está fora da rota*/

export default ListarCategorias;