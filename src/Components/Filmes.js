import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filme from "./Filme";
import Carregando from "../Assets/Img/loading.gif"

export default function Filmes() {
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((resposta) => {
      setFilmes(resposta.data);
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (filmes === null){
    return (
        <Loading>
            <img src={Carregando} alt="Carregando" />
        </Loading>
    )
  }

  return (
    <>
      <EscolhaTexto>
        <h1>Selecione o filme</h1>
      </EscolhaTexto>
      <FilmesLista>
        {filmes.map((filme) => (
          <Filme key={filme.id} filme={filme} />
        ))}
      </FilmesLista>
    </>
  );
}

const FilmesLista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 30px;
  justify-content: space-between;
`;

const EscolhaTexto = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const Loading = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
