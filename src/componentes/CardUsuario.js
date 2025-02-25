import { useRef } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "./Card";

const CardUsuario = () => {
  const { ligado, definirUsuario } = useGlobalContext();
  const inputRef = useRef(null);

  const handleClick = () => {
    definirUsuario(inputRef.current.value);
  };

  console.log("Renderizou o card usuário", ligado);
  return (
    <Card titulo="Login">
      <p>
        <input type="text" ref={inputRef} placeholder="Digite o usuario..." />
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
