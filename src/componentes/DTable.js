import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function findRowKey(linha, propriedade, indice) {
  let valor = null;
  if (propriedade) valor = linha[propriedade];
  else valor = indice;
  return valor;
}

const DTable = ({ colunas, dados }) => {
  const { logRenders } = useGlobalContext();
  const colKey = colunas?.find((c) => c.Key === true)?.propriedade;

  if (logRenders) console.log("Renderizou a tabela");
  return (
    <table>
      <thead>
        <tr>
          {colunas && colunas.map((col, ix) => <th key={ix}>{col.titulo}</th>)}
        </tr>
      </thead>
      <tbody>
        {dados &&
          dados.map((li, ix) => {
            const key = findRowKey(li, colKey, ix);
            return (
              <tr key={key}>
                <td>x</td>
                <td>Teste</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DTable;
