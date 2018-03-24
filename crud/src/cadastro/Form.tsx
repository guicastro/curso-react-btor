import * as React from "react";
import Button from "../framework/Button";
import TextInput from "../framework/TextInput";
import Pessoa from "../model/Pessoa";

interface Props {

  onAdd: (data: Pessoa) => void;
}

interface State {

  id: number,
  nome: string,
  email: string,
  idade: number
}

class Form extends React.Component<Props, State> {

  state = {
    id: 0,
    nome: '',
    email: '',
    idade: 0,
  }

  handleSave = () => {

    const {id, nome, email, idade} = this.state;
    const data = {id, nome, email, idade};
    this.props.onAdd(data);
    this.setState({id: 0, nome: '', email:'', idade:0});
  }

  render() {

    /*
    ver melhor props dinâmica pois é possível criar componentes dinâmicos
    const propsDin = { label: "nome", placeholder: "oi" };
    */

    return (
      <div className="card">
        <form>
          <TextInput
            type="text"
            id="nome"
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
            classdiv="form-group"
            classinput="form-control"
            value={this.state.nome}
            onChange={(value: string) => this.setState({nome: value})} />
          <TextInput
            type="text"
            id="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            classdiv="form-group"
            classinput="form-control"
            value={this.state.email}
            onChange={(value: string) => this.setState({email: value})} />
          <TextInput
            type="text"
            id="idade"
            name="idade"
            label="Idade"
            placeholder="Digite sua idade"
            classdiv="form-group"
            classinput="form-control"
            value={this.state.idade.toString()}
            number
            onChange={(value: number) => this.setState({idade: value})} /*{...propsDin}*/ />
          <div style={{ textAlign: "right" }}>
            <Button
              name="salvar"
              id="salvar"
              type="button"
              classname="btn btn-success"
              label="Salvar"
              click={this.handleSave} />
          </div>

        </form>
      </div>
    );
  }
}

export default Form;
