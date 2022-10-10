import styled from "styled-components";
import { useState } from "react";

export default function Assento(props) {
  const { isAvailable, id, name, seats, index } = props;
  const [disponivel, setDisponivel] = useState(isAvailable);

  function Apertou(index) {
    console.log(index);
    console.log(isAvailable);
    console.log(seats[index]);
    if (seats[index].isAvailable === false) {
      alert("Esse assento não está disponível");
    }
    if (seats[index].isAvailable === true){
      setDisponivel("selecionado");
      console.log("selecionado");
    }
  }

  return (
    <Lugar onClick={() => Apertou(index)} key={id} isAvailable={disponivel}>
      {name}
    </Lugar>
  );
}

const Lugar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  background-color: ${(props) => (props.isAvailable ? "#c3cfd9" : ((props.isAvailable === "selecionado") ? "#1aae9e" : "#fbe192"))};
  border: 1px solid ${(props) => (props.isAvailable ? "#c3cfd9" : ((props.isAvailable === "selecionado") ? "#1aae9e" : "#fbe192"))};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #000000;
`;
