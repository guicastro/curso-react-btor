import * as React from "react";
import TextField from "../shared/TextField";
import Button from "../shared/Button";
import Pessoa from "../model/Pessoa";

interface Props {
  onAdd: (pessoa: Pessoa) => void;
  onEdit: (pessoa: Pessoa) => void;
  onCancel: () => void;
  pessoaOnEditing?: Pessoa;
}

interface State {
  nome: string;
  email: string;
  idade: number;
  id: number;
}

class Form extends React.Component<Props, State> {
  state = {
    nome: "",
    email: "",
    idade: 0,
    id: 0
  };

  handleSaveClick = () => {
    const { nome, email, idade, id } = this.state;

    const pessoa = { nome, email, idade, id };

    if (id) {
      this.props.onEdit(pessoa);
    } else {
      this.props.onAdd(pessoa);
    }

    this.setState({ nome: "", email: "", idade: 0, id: 0 });
  };

  handleCancel = () => {
    this.setState({ nome: "", email: "", idade: 0, id: 0 });
    this.props.onCancel();
  };

  componentWillUpdate(nextProps: Props, nextState: State) {
    if (this.props.pessoaOnEditing != nextProps.pessoaOnEditing) {
      if (nextProps.pessoaOnEditing) {
        this.setState(nextProps.pessoaOnEditing!!);
      } else {
        this.setState({ nome: "", email: "", idade: 0, id: 0 });
      }
    }
  }

  render() {
    const { id } = this.state;

    return (
      <div className="card">
        <form>
          <div>
            <h3>{id ? `# ${id}` : "NOVO"}</h3>
          </div>

          <TextField
            value={this.state.nome}
            onChange={(value: string) => this.setState({ nome: value })}
            label="Nome"
          />

          <TextField
            value={this.state.email}
            onChange={(value: string) => this.setState({ email: value })}
            label="E-Mail"
          />

          <TextField
            number
            value={this.state.idade.toString()}
            onChange={(value: number) => this.setState({ idade: value })}
            label="Idade"
          />

          <div style={{ textAlign: "right" }}>
            <Button
              type="danger"
              click={this.handleCancel}
              style={{ marginRight: 16 }}
              label="Limpar" />

            <Button
              type="primary"
              click={this.handleSaveClick}
              label="Salvar" />

          </div>
        </form>
      </div>
    );
  }
}

export default Form;
