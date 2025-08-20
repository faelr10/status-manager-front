import { Container, Menu } from "./style";
import { Link } from "react-router-dom";

export function MenusBar() {
  return (
    <Container>
      <Menu as={Link} to="/">
        Gestão
      </Menu>
      <Menu as={Link} to="/relatorios-gerais">
        Relatórios Gerais
      </Menu>
      <Menu as={Link} to="/financeiro">
        Financeiro
      </Menu>
      <Menu as={Link} to="/obras">
        Obras
      </Menu>
      <Menu as={Link} to="/funcionarios">
        Funcionários
      </Menu>
      <Menu as={Link} to="/controle-ponto">
        Controle de Ponto
      </Menu>
    </Container>
  );
}
