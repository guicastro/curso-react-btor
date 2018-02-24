import * as React from 'react';
import './App.css';
import Config from './helpers/config.helper';

// const logo = require('./logo.svg');

// const cssInline: React.CSSProperties = {
//   color: 'gray',
//   fontWeight: 'bold',
// };

const vezes = 5;

class App extends React.Component {
  render() {

    const config = new Config();

    const nomes = [];

    for (var i = 0; i < vezes; i++) {
      nomes.push(config.appName + ' [' + i + ']');
    }

    return (
      <div className="App">
        {nomes.map((nome, index: number) => <h1 key={index}>{nome}</h1>)}
      </div>
    );
  }
}

export default App;
