import * as React from "react";
import TextField from "./TextField";

class Form extends React.Component {

    render() {

        return (
            <div className="form">
                <TextField label="Nome" placeholder="Digite seu nome"  />
                <TextField label="CPF" placeholder="Digite seu CPF" />
                <TextField label="Idade" placeholder="Digite sua idade" />
                <button type="button"> Salvar</button>
            </div>
        );
}
}

export default Form;