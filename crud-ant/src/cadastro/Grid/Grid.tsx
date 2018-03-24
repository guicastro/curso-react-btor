import * as React from "react";
import { Table } from "antd";
import { Divider } from "antd";
import Button from "../../shared/Button";
import Pessoa from "../../model/Pessoa";

interface Props {
  dataSource: Pessoa[];
  onEdit: (pessoaOnEditing: Pessoa) => void;
  onRemove: (pessoa: Pessoa) => void;
}

class Grid extends React.Component<Props> {
  render() {
    const { dataSource } = this.props;

    const columns = [
      {
        title: "#",
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: "Nome",
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: "E-mail",
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: "Idade",
        dataIndex: 'idade',
        key: 'idade',
        render: (text: string) => text + ' anos'
      },
      {
        title: "Actions",
        dataIndex: 'actions',
        key: 'actions',
        render: (text: string, record: Pessoa) => (<div>
        <Button
          type="primary"
          click={() => this.props.onEdit(record)}
          icon="edit"
        />
        <Divider type="vertical" />
        <Button
          type="danger"
          click={() => this.props.onRemove(record)}
          icon="delete"
        />
        </div>)
      },
    ];

    return (
      <Table dataSource={dataSource} columns={columns} />
    );
  }
}

export default Grid;
