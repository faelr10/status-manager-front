import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gestao } from "./Dashboard/ContainerData/Pages/Gestao";
import { Obras } from "./Dashboard/ContainerData/Pages/Obras";
import { Funcionarios } from "./Dashboard/ContainerData/Pages/Funcionarios";
import { DashBoard } from "./Dashboard";
import { RelatoriosGerais } from "./Dashboard/ContainerData/Pages/RelatoriosGerais";
import { Ponto } from "./Dashboard/ContainerData/Pages/Ponto";
import { Financeiro } from "./Dashboard/ContainerData/Pages/Financeiro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Gestao />} />
          <Route path="relatorios-gerais" element={<RelatoriosGerais />} />
          <Route path="obras" element={<Obras />} />
          <Route path="funcionarios" element={<Funcionarios />} />
          <Route path="controle-ponto" element={<Ponto />} />
          <Route path="financeiro" element={<Financeiro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
