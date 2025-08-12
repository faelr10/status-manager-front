import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 90%;
  margin-top: 50px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-start;
  width: 90%;
  text-align: center;
  border-bottom: 1px solid #3a3f4b; /* Cor da borda mais escura */
  font-size: 16px;

  //remover estilo de link
  text-decoration: none;
  color: #d1d1d1; /* Cor do texto mais clara */

  padding: 15px;

  font-family: "Ubuntu", sans-serif;

  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #f0f0f0;
    background-color: #1f4a73; /* Cor de fundo mais escura no hover */
  }
`;
