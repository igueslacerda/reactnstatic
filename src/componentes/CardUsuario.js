import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "./Card";

const CardUsuario = () => {
  const { definirUsuario } = useGlobalContext();
  const [text, setText] = useState("");

  const handleClick = () => {
    definirUsuario(text);
  };

  return (
    <Card titulo="Login">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o usuario..."
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleClick}
      >
        Definir Usuário
      </button>
    </Card>
  );
};

export default CardUsuario;
