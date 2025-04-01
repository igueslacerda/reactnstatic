import React from "react";

function findRowKey(linha, propriedade, indice) {
  let valor = null;
  if (propriedade) valor = linha[propriedade];
  else valor = indice;
  return valor;
}

function setColumnAlignment(col) {
  let align = "left";
  if (col.alinhamento === "direita") align = "right";
  else if (col.alinhamento === "centro") align = "center";
  return { textAlign: align };
}

const DTable = React.memo(({ colunas, dados }) => {
  const colKey = colunas?.find((c) => c.Key === true)?.propriedade;

  console.log("Renderizou a tabela");
  if (colunas)
    return (
      <table>
        <thead>
          <tr>
            {colunas.map((col, ix) => (
              <th key={ix} style={setColumnAlignment(col)}>
                {col.titulo}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados &&
            dados.map((li, ix) => {
              const key = findRowKey(li, colKey, ix);
              return (
                <tr key={`tbrow-${key}`}>
                  {colunas.map((col, ix) => (
                    <td
                      key={`tbrow-${key}-${ix}`}
                      style={setColumnAlignment(col)}
                    >
                      {li[col.propriedade]}
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    );
});

export default DTable;
