import "./App.css";
import Filter from "./components/Filter";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [apiData, setApiData] = useState([]);

  return (
    <div className="App">
      <h2>Busque as informações do repositório desejado</h2>
      <div className="Container">
        <Filter setApiData={setApiData} apiData={apiData} />
        <Card apiData={apiData} />
      </div>
    </div>
  );
}

export default App;
