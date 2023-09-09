import React from "react";
import '../index.css';

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Quantidade de livros na tabela: { props.qdeLivros }</td>
        </tr>
    </tfoot>
)

export default TabelaFoot;
