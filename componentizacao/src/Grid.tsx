import * as React from "react";

class Grid extends React.Component {

    render() {

        return (
            <div className="grid">
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Idade</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Guilherme</td>
                    <td>00706944194</td>
                    <td>32 anos</td>
                    <td className="actions">
                    <button>[e]</button>
                    <button className="error">[x]</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default Grid;