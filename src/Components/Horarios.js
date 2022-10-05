import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Horario from "./Horario";
import Carregando from "../Assets/Img/loading.gif";

export default function Horarios() {
  const [horarios, setHorarios] = useState(null);

  useEffect(() => {
    const URL =
      "https://mock-api.driven.com.br/api/v8/cineflex/movies/11/showtimes";
    const promise = axios.get(URL);

    promise.then((resposta) => {
      setHorarios(resposta.data.days);
      console.log(resposta.data.days);
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);
  if (horarios === null) {
    return (
      <Loading>
        <img src={Carregando} alt="Carregando" />
      </Loading>
    );
  }
  return (
    <>
      <EscolhaTexto>
        <h1>Selecione o horário</h1>
      </EscolhaTexto>
      {horarios.map((dia) => (
        <Horario key={dia.id} horarios={dia} />
      ))}
    </>
  );
}

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
`;
