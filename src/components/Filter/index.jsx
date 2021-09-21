import { useState } from "react";
import Card from "../Card";

function Filter() {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState([]);

  function getData() {
    const data = () => {
      fetch(`https://api.github.com/repos/${userInput}`)
        .then((response) => response.json())
        .then((response) => setApiData([...apiData, response]))
        .catch((err) => console.log(err));
    };
    return data;
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Insira o repositório aqui"
      ></input>

      <button onClick={getData()}>Pesquisar</button>
      <Card apiData={apiData} />
    </div>
  );
}
export default Filter;
