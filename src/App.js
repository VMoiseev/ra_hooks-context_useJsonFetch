import "./App.css";
import Component from "./components/component";

const PORT = 7070;
const successUrl = `http://localhost:${PORT}/data`;
const errorUrl = `http://localhost:${PORT}/error`;
const loadingUrl = `http://localhost:${PORT}/loading`;

function App() {
  return (
    <div className="App">
      <Component url={successUrl} title="Успех" />
      <Component url={errorUrl} title="Ошибка" />
      <Component url={loadingUrl} title="Загрузка" />
    </div>
  );
}

export default App;
