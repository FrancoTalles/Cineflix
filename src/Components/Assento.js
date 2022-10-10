import styled from "styled-components";

export default function Assento (props){
    const {isAvailable, id, name} = props
    return (
        <Lugar key={id} isAvailable={isAvailable}>{name}</Lugar>
    )
}

const Lugar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 12px;
  background-color: ${props => props.isAvailable ? "#c3cfd9" : "#fbe192"};
  border: 1px solid ${props => props.isAvailable ? "#808f9d" : "#f7c52b"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #000000;
`;