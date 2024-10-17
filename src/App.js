import "./App.css";
import Card from "./componentes/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Web site experiment</h4>
      </header>
      <div>
        <p>Corpo do site. Experimento de layout.</p>
        <Card titulo="Titulo do card">
          <p>
            Primeira linha
            <br />
            Conteúdo do card.
            <br />
            Pode ser multi linhas.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
