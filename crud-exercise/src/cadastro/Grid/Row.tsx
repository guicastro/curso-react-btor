import * as React from "react";
import Button from "../../framework/Button";
import Pessoa from "../../model/Pessoa";

interface Props {

    data: Pessoa;
    onEdit: (pessoa: Pessoa) => void;
}

/*por ser um function, o método de chamar do handle será chamado como array function*/

function Row(props: Props) {

    const { data, onEdit } = props;

    return (
        <tr>
            <td>{data.nome}</td>
            <td>{data.email}</td>
            <td>{data.idade} anos</td>
            <td className="actions">
                <Button
                    name="editar"
                    id="editar"
                    type="button"
                    classname="btn btn-info btn-margin"
                    label="[E]"
                    click={() => onEdit(data)} />
                <Button
                    name="excluir"
                    id="excluir"
                    type="button"
                    classname="btn btn-danger btn-margin"
                    label="[X]" />
            </td>
        </tr>
        );
}

export default Row;