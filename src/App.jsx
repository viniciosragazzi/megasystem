import "./App.css";
import DadosContext from "./assets/shared/context/contextApp";
import RoutesApp from "./assets/shared/routes/RoutesApp";

function App() {
  return (
    <DadosContext>
      <RoutesApp />
    </DadosContext>
  );
}

export default App;
