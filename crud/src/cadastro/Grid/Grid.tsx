import * as React from "react";
import Pessoa from "../../model/Pessoa";
import Row from "./Row";

interface Props {

    dataSource: Pessoa[];
}

class Grid extends React.Component<Props> {

    render() {

    const {dataSource} = this.props;

    const lines = dataSource.map((data, index) => <Row /*onEdit={}*/ key={index} data={data} />);

    return (
        <table className="table table-stripped table-hover margin">
          <thead>
            <tr> 
              <th scope="col" className="col-xs-4">Nome</th>
              <th scope="col" className="col-xs-4">E-mail</th>
              <th scope="col" className="col-xs-3">Idade</th>
              <th scope="col" className="col-xs-1"></th>
            </tr>
          </thead>
          <tbody>
            {lines}
          </tbody>
        </table>
    );
  }
}

export default Grid;
