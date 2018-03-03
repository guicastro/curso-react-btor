import * as React from "react";
import './css/App.css';
import Form from "./Form";
import Grid from "./Grid";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header" >Cadastro</div>
        <Form />
        <Grid />
      </div>
    );
  }
}

export default App;
