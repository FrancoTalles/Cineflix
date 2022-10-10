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
      setHorarios(resposta.data);
      console.log(resposta.data);
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
      {horarios.days.map((dia) => (
        <Horario key={dia.id} horarios={dia} />
      ))}
      <Rodape>
        <ImagemRodape>
          <img src={horarios.posterURL} alt="nada" />
        </ImagemRodape>
        <h1>{horarios.title}</h1>
      </Rodape>
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

const Rodape = styled.div`
  width: 100%;
  height: 117px;
  background-color: #9eadba;
  position: fixed;
  right: 0px;
  bottom: 0px;
  display: flex;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin: 38px 0px 39px 0px;
  }
`;

const ImagemRodape = styled.div`
  width: 64px;
  height: 89px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 14px 14px 10px;
  img {
    width: 48px;
    height: 72px;
  }
`;

const RodapeCarregando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;
