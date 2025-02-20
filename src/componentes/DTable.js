import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const DTable = () => {
  const { logRenders } = useGlobalContext();

  if (logRenders) console.log("Renderizou a tabela");
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Primeira Linha</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Segunda Linha</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DTable;
