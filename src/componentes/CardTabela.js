import Card from "./Card";
import DTable from "./DTable";

const CardTabela = () => {
  const colunas = [
    { titulo: "Id", propriedade: "id", key: true },
    { titulo: "Descrição", propriedade: "descricao" },
  ];
  const dados = [
    { id: 1, descricao: "Linha Primeira" },
    { id: 2, descricao: "Linha Segunda" },
  ];

  return (
    <Card titulo="Tabela">
      <DTable colunas={colunas} dados={dados} />
    </Card>
  );
};

export default CardTabela;
