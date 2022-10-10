import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Carregando from "../Assets/Img/loading.gif";
import Assento from "./Assento";

export default function Sessao() {
  const [seats, setSeats] = useState(null);
  const {idSessao} = useParams();

  useEffect(() => {
    const URL =
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
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
    <Body>
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
      <Comprador>
        <h1>Nome do comprador:</h1>
        <input type="text" placeholder="Digite seu nome..."></input>
      </Comprador>
      <CPF>
        <h1>CPF do comprador:</h1>
        <input placeholder="Digite seu CPF..."></input>
      </CPF>
      <BotaoReserva>
        <button>Reservar assento(s)</button>
      </BotaoReserva>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Assentos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 24px;
  margin-right: 24px;
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

const Comprador = styled.div`
  margin-top: 45px;
  width: 87.2%;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  input {
    width: 100%;
    height: 51px;
    font-family: "Roboto", sans-serif;
    border: 1px solid #d4d4d4;
    font-size: 18px;
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: italic;
      font-size: 18px;
      line-height: 21px;
      color: #afafaf;
    }
  }
`;

const CPF = styled.div`
  margin-top: 10px;
  width: 87.2%;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  input {
    width: 100%;
    height: 51px;
    font-family: "Roboto", sans-serif;
    border: 1px solid #d4d4d4;
    font-size: 18px;
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: italic;
      font-size: 18px;
      line-height: 21px;
      color: #afafaf;
    }
  }
`;

const BotaoReserva = styled.div`
  margin-top: 57px;
  width: 100%;
  display: flex;
  justify-content: center;
  button{
    width: 60%;
    height: 42px;
    background-color: #e8833a;
    border: 1px solid #e8833a;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
    font-family: "Roboto", sans-serif;
  }
`;
