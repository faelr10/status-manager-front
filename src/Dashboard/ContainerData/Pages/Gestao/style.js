// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: flex-start;
//   flex-direction: column;
//   color: #333;
//   width: 95%;
//   height: 85vh;

//   border: 1px solid black;
// `;

// export const BoxForm = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
//   width: 100%;
//   height: 20vh;

//   border: 1px solid #ccc;
//   border-radius: 10px;

//   //se for mobile
//   @media (max-width: 768px) {
//     flex-direction: column;
//     width: 100%;
//     height: 85vh;
//   }
// `;

// export const BoxInput = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 20%;
//   height: 100%;
//   /* border: 1px solid #ccc; */

//   @media (max-width: 768px) {
//     width: 90%;
//     height: auto;
//     margin-top: 20px;
//   }
// `;

// export const BoxFormModal = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
//   width: 100%;
//   height: 5vh;
//   border-radius: 10px;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

// //tabela

// export const TableContainer = styled.div`
//   margin-top: 40px;
// `;

// export const TabelaObras = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: center;
// `;

// export const THead = styled.thead`
//   // Estilos de cabeçalho, se precisar
// `;

// export const Th = styled.th`
//   border: 1px solid #ccc;
//   background-color: #e0e0e0;
//   padding: 10px;
//   font-size: 14px;
//   font-weight: bold;
//   color: #333;
// `;

// export const ThData = styled(Th)`
//   background-color: #ffc29d;
//   width: 80px;
// `;

// export const Tr = styled.tr`
//   // Estilos de linha, se precisar
// `;

// export const Td = styled.td`
//   border: 1px solid #ccc;
//   padding: 10px;
//   font-size: 13px;
//   height: 40px;
//   vertical-align: middle;
// `;

// export const TdData = styled(Td)`
//   background-color: #fff;
//   font-weight: bold;
//   width: 80px;
// `;

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

export const BoxForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 10vh;

  border: 1px solid #ccc;
  border-radius: 10px;

  //se for mobile
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 35vh;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  /* border: 1px solid #ccc; */

  @media (max-width: 768px) {
    width: 90%;
    height: 5vh;
  }
`;

export const BoxFormModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 5vh;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// tabela

export const TableContainer = styled.div`
  width: 100%;

  /* A chave para o scroll! */
  /* O 'flex: 1' faz com que o TableContainer ocupe o restante do espaço vertical disponível */
  flex: 1;
  overflow-y: auto; /* Adiciona scroll vertical se o conteúdo exceder a altura */

  /* Para garantir que não haja scroll horizontal */
  overflow-x: hidden;

  /* Opcional: Adicionar um padding para que o conteúdo não fique colado nas bordas */
  padding: 10px;
  box-sizing: border-box; /* Garante que o padding não adicione mais tamanho */
`;

export const TabelaObras = styled.table`
  width: 100%; /* A tabela ocupa 100% da largura do TableContainer */
  border-collapse: collapse;
  text-align: center;
`;

export const THead = styled.thead`
  /* O cabeçalho da tabela deve ficar fixo no topo da rolagem */
  position: sticky;
  top: 0;
  background-color: #e0e0e0;
  z-index: 10;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const ThData = styled(Th)`
  background-color: #ffc29d;
  width: 40px;
`;

export const Tr = styled.tr`
  // Estilos de linha, se precisar
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 2px;
  font-size: 13px;
  vertical-align: middle;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 1px;
  }
`;

export const TdData = styled(Td)`
  background-color: #fff;
  font-weight: bold;
  width: 40px;
`;
