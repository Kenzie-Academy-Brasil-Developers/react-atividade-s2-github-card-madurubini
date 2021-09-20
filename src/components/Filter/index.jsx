import { useEffect, useState } from "react";
import Card from "../Card";

function Filter() {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((response) => response.json())
      .then((response) => setApiData(response))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Insira o repositório aqui"
      ></input>

      <button onClick={() => console.log(apiData)}>Pesquisar</button>
      <Card apiData={apiData} />
    </div>
  );
}
export default Filter;
