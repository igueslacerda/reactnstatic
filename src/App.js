import { GlobalContextProvider } from "./contexts/GlobalContext";
import "./App.css";
import MenuTop from "./componentes/MenuTop";
import Card from "./componentes/Card";
import CardUsuario from "./componentes/CardUsuario";
import CardTabela from "./componentes/CardTabela";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <MenuTop />
        <div className="content" style={{ padding: "0 20px 20px 20px" }}>
          <header className="App-header">
            <h4>Web site experiment</h4>
          </header>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <p style={{ width: "100%" }}>
              Corpo do site. Experimento de layout.
            </p>
            <Card titulo="Titulo do card">
              <p>
                Primeira linha
                <br />
                Conteúdo do card.
                <br />
                Pode ser multi linhas.
              </p>
              <div>
                E vários elementos &nbsp;<button>Ok</button>
              </div>
            </Card>
            <Card
              titulo="Customizado"
              maxWidth="150px"
              backgroundColor="lightgoldenrodyellow"
            >
              A largura e cor de fundo pode ser customizado.
            </Card>
            <CardUsuario />
            <CardTabela />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
