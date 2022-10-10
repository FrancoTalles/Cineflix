import styled from "styled-components";

export default function Horario(props) {
  const { horarios } = props;
  const { date, id, showtimes, weekday } = horarios;
  console.log(weekday, showtimes);
  return (
    <Horarios>
      <p>
        {weekday} - {date}
      </p>
      <Botoes>
        {showtimes.map((hora) => (
          <button key={hora.id}>{hora.name}</button>
        ))}
      </Botoes>
    </Horarios>
  );
}

const Horarios = styled.div`
  margin-left: 24px;
  margin-bottom: 23px;
  p {
    margin-bottom: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    line-height: 23px;
    color: #293845;
  }
`;

const Botoes = styled.div`
  display: flex;
  button {
    width: 83px;
    height: 43px;
    border-radius: 3px;
    border: 1px solid #e8833a;
    background-color: #e8833a;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-right: 9px;
  }
`;
