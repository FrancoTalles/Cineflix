import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Carregando from "../Assets/Img/loading.gif";
import Assento from "./Assento";

export default function Sessao() {
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    const URL =
      "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/161/seats";
    const promise = axios.get(URL);

    promise.then((resposta) => {
      console.log(resposta.data);
      setSeats(resposta.data.seats);
    });

    promise.catch((erro) => console.log(erro.response.data));
  }, []);

  if (seats === null) {
    return (
      <Loading>
        <img src={Carregando} alt="Carregando" />
      </Loading>
    );
  }
  return (
    <>
      <EscolhaTexto>
        <h1>Selecione o(s) assento(s)</h1>
      </EscolhaTexto>
      <Assentos>
        {seats.map((assento, index) => (
          <Assento
            key={index}
            isAvailable={assento.isAvailable}
            id={assento.id}
            name={assento.name}
          />
        ))}
      </Assentos>
      <Exemplo>
        <Selecionado>
          <div></div>
          <p>Selecionado</p>
        </Selecionado>
        <Disponivel>
          <div></div>
          <p>Disponível</p>
        </Disponivel>
        <Indisponivel>
          <div></div>
          <p>Indisponível</p>
        </Indisponivel>
      </Exemplo>
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

const Assentos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 24px;
`;

const Loading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Exemplo = styled.div`
  display: flex;
  margin: 0px 24px 0px 24px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Selecionado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #1aae9e;
    border: 1px solid #0e7d71;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
    margin-top: 8px;
  }
`;

const Indisponivel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #fbe192;
    border: 1px solid #f7c52b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
    margin-top: 8px;
  }
`;

const Disponivel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
    margin-top: 8px;
  }
`;
