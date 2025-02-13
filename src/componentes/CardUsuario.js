import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "./Card";

const CardUsuario = () => {
  const { ligado, definirUsuario } = useGlobalContext();
  const [text, setText] = useState("");

  const handleClick = () => {
    definirUsuario(text);
  };

  console.log("Renderizou o card usuário");
  return (
    <Card titulo="Login">
      <p>
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
      </p>
      <label style={{ color: ligado ? "green" : "red" }}>
        {ligado ? "Ligado" : "Desligado"}
      </label>
    </Card>
  );
};

export default CardUsuario;
