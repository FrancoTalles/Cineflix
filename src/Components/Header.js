import styled from "styled-components";

export default function Header() {
  return (
    <Topo>
      <h1>CINEFLIX</h1>
    </Topo>
  );
}

const Topo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8822a;
  }
`;
