import * as React from "react";
import "./App.css";
import Form from "./cadastro/Form";
import Grid from "./cadastro/Grid";
import Pessoa from "./model/Pessoa";

interface State {

  database: Pessoa[];
}

/*PureComponent sempre faz uma checagem de state, só renderiza se muda, é mais perfomático que Component*/

class App extends React.PureComponent<{}, State> {

  state = {
    database: [
      { id: 1, nome: "Luan", email: 'luan.castro@nuvem.net', idade: 19 },
      { id: 4, nome: "Gui", email: 'gui@senai.com', idade: 29 },
      { id: 3, nome: "Xandy", email: 'xandeco@btor.net', idade: 35 },
      { id: 6, nome: "Diogo", email: 'Diogo@btor.net', idade: 15 },
      { id: 8, nome: "Diego", email: 'Diego@btor.net', idade: 34 },
      { id: 9, nome: "Pedro", email: 'Pedro@btor.net', idade: 27 },
      { id: 7, nome: "Rodrigo", email: 'rodrigo@urso-pelado.net', idade: 18 },
    ]
  }

  handleAdd = (data: Pessoa) => {

    let database = this.state.database;
    database = database.concat(database);
    this.setState({database});
  }

  render() {

    const {database} = this.state;
    
    return (
      <div className="continer-fluid">
        <Form onAdd={this.handleAdd} />
        <Grid dataSource={database} />
      </div>
    );
  }
}

export default App;
