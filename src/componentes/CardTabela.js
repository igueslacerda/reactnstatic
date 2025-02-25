import { useCallback, useMemo, useReducer } from "react";
import Card from "./Card";
import DTable from "./DTable";
import { useGlobalContext } from "../contexts/GlobalContext";

const tableReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return [...state, action.payload];
    case "REMOVE_ROW":
      return state.filter((_, index) => index !== action.payload);
    case "RESET":
      return action.payload;
    default:
      return state;
  }
};

const dadosIniciais = [
  { id: 1, descricao: "Linha Primeira" },
  { id: 2, descricao: "Linha Segunda" },
];

const CardTabela = () => {
  const { ligado } = useGlobalContext();
  const [linhas, dispatch] = useReducer(tableReducer, dadosIniciais);

  const colunas = useMemo(
    () => [
      { titulo: "Id", propriedade: "id", key: true },
      { titulo: "Descrição", propriedade: "descricao" },
    ],
    []
  );

  const addRowClick = useCallback(() => {
    dispatch({
      type: "ADD_ROW",
      payload: {
        id: (linhas?.length ?? 0) + 1,
        descricao: "Linha adicionada xx",
      },
    });
  }, [linhas]);

  //console.log("Renderizou o card tabela");
  return (
    <Card titulo="Tabela">
      <button onClick={addRowClick}>Adicionar</button>
      <DTable colunas={colunas} dados={linhas} />
      <p style={{ textAlign: "end" }}>
        <label style={{ color: ligado ? "green" : "red" }}>
          {ligado ? "Ligado" : "Desligado"}
        </label>
      </p>
    </Card>
  );
};

export default CardTabela;
