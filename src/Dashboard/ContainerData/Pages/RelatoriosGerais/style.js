// import styled from "styled-components";

// // Paleta de cores moderna e profissional
// const primaryColor = "#2c3e50"; // Cinza escuro para o texto principal
// const secondaryColor = "#34495e"; // Azul marinho para cabeçalhos e destaques
// const lightGray = "#ecf0f1"; // Cinza muito claro para o fundo
// const mediumGray = "#bdc3c7"; // Cinza médio para bordas
// const white = "#ffffff"; // Branco puro para o fundo principal




// export const Section = styled.section`
//   margin-bottom: 3.5rem;
//   background-color: ${white};
//   padding: 2.5rem;
//   border-radius: 12px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
// `;

// export const Title = styled.h1`
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   font-size: 2.5rem;
//   font-weight: 300;
//   color: ${primaryColor};
//   text-align: center;
//   margin-bottom: 2rem;
//   border-bottom: 2px solid ${mediumGray};
//   padding-bottom: 1rem;
// `;

// export const TableContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   overflow-x: auto;
//   border-radius: 8px;
//   border: 1px solid ${mediumGray};
//   background-color: ${white};
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
// `;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   font-size: 0.80em;
//   color: ${primaryColor};
// `;

// // -- MODIFICAÇÃO AQUI: COR MAIS ESCURA E TEXTO BRANCO --
// export const TableHeadTitle = styled.th`
//   width: 100%;
//   background-color: #286a8d; /* Cor de fundo mais escura */
//   text-align: center;
//   font-size: 1.1em;
//   font-weight: 600;
//   padding: 1rem;
//   border-bottom: 2px solid ${mediumGray};
//   color: ${white}; /* Cor do texto branca para contraste */

//   &:first-child {
//     border-top-left-radius: 8px;
//   }
//   &:last-child {
//     border-top-right-radius: 8px;
//   }
// `;

// export const TableHeader = styled.th`
//   background-color: ${lightGray};
//   color: ${secondaryColor};
//   padding: 0.5rem 1rem;
//   text-align: center; /* Alinhar todos os headers ao centro */
//   border: 1px solid ${mediumGray};
//   font-weight: 600;
// `;

// // -- MODIFICAÇÃO AQUI: QUEBRA DE LINHA E TAMANHO MÍNIMO --
// export const TableData = styled.td`
//   padding: 0.2rem 1rem;
//   text-align: center;
//   border: 1px solid ${mediumGray};
//   vertical-align: middle;
//   line-height: 1.4;
//   background-color: ${white};
//   word-break: break-word; /* A propriedade para quebrar palavras longas */

//   &[rowspan] {
//     font-weight: 500;
//     background-color: ${lightGray};
//     text-align: left;
//     min-width: 80px; /* Adiciona uma largura mínima para a coluna de obras */
//   }

//   &:not([rowspan]) {
//     min-width: 100px; /* Adiciona uma largura mínima para as outras colunas */
//   }
// `;

// export const TotalRow = styled.tr`
//   background-color: ${lightGray};
//   font-weight: bold;
// `;

// export const TotalCell = styled.td`
//   padding: 0.75rem 1rem;
//   text-align: center;
//   border: 1px solid ${mediumGray};
//   font-weight: bold;
//   color: ${secondaryColor};
// `;
// // 

import styled from "styled-components";

// Paleta de cores moderna e profissional
const primaryColor = "#2c3e50"; // Cinza escuro para o texto principal
const secondaryColor = "#34495e"; // Azul marinho para cabeçalhos e destaques
const lightGray = "#ecf0f1"; // Cinza muito claro para o fundo
const mediumGray = "#bdc3c7"; // Cinza médio para bordas
const white = "#ffffff"; // Branco puro para o fundo principal

export const Section = styled.section`
  margin-bottom: 3.5rem;
  background-color: ${white};
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: ${primaryColor};
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${mediumGray};
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid ${mediumGray};
  background-color: ${white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  -webkit-overflow-scrolling: touch; /* Rolagem suave no iOS */
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.80em;
  color: ${primaryColor};
  table-layout: auto; /* Ajusta automaticamente o tamanho das colunas */

  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export const TableHeadTitle = styled.th`
  background-color: #286a8d;
  text-align: center;
  font-size: 1.1em;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 2px solid ${mediumGray};
  color: ${white};

  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 0.6rem;
  }
`;

export const TableHeader = styled.th`
  background-color: ${lightGray};
  color: ${secondaryColor};
  padding: 0.5rem 1rem;
  text-align: center;
  border: 1px solid ${mediumGray};
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 0.4rem;
    font-size: 0.75em;
  }
`;

export const TableData = styled.td`
  padding: 0.2rem 1rem;
  text-align: center;
  border: 1px solid ${mediumGray};
  vertical-align: middle;
  background-color: ${white};

  &[rowspan] {
    font-weight: 500;
    background-color: ${lightGray};
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 0.3rem;
    font-size: 0.75em;
  }
`;

export const TotalRow = styled.tr`
  background-color: ${lightGray};
  font-weight: bold;
`;

export const TotalCell = styled.td`
  padding: 0.75rem 1rem;
  text-align: center;
  border: 1px solid ${mediumGray};
  font-weight: bold;
  color: ${secondaryColor};

  @media (max-width: 768px) {
    padding: 0.4rem;
    font-size: 0.75em;
  }
`;
