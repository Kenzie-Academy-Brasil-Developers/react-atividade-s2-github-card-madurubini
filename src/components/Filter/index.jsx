import { useState } from "react";
import axios from "axios";
import "./style.css";

function Filter({ setApiData, apiData }) {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);

  function getData() {
    axios
      .get(`https://api.github.com/repos/${userInput}`)
      .then((response) => {
        setIsError(false);
        setApiData([...apiData, response]);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }

  return (
    <div>
      <div className="Formulario">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ex.: owner/repository_name"
        ></input>
        <div className="Buttons">
          <button onClick={() => getData()}>Pesquisar</button>

          <button
            onClick={() => {
              setUserInput("");
              setIsError(false);
            }}
          >
            Limpar Filtro
          </button>
        </div>
      </div>
      {isError && <p className="Erro">Repositório não encontrado</p>}
    </div>
  );
}
export default Filter;
