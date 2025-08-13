import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95vh; /* A altura total do componente */

  /* border: 1px solid black; */

  /* Ajuste para que o scroll não seja no Container, mas sim no TableContainer */
  /* Removemos o 'align-items: flex-start' para permitir que o conteúdo se expanda e centralize */
  align-items: center;
  justify-content: flex-start;
  color: #333;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;

  border: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-top: 20px;
  }
`;
