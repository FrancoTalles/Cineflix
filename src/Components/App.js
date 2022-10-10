import Filmes from "./Filmes";
import GlobalStyle from "./globalStyles";
import Header from "./Header";
import Horarios from "./Horarios";
import Sessao from "./Sessao";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/sessoes/:idFilme" element={<Horarios />} />
        <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<Sessao />} />
      </Routes>
    </BrowserRouter>
  );
}

// font-family: "Roboto", sans-serif;

// path="/assentos/:idSessao"
