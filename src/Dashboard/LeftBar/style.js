import styled from "styled-components";

// export const Container = styled.div`
//   position: sticky;
//   top: 0;
//   height: 100vh; /* Use 100vh para a altura */
//   left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
//   background-color: #286a8d;
//   color: #fff;
//   width: 40vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   transition: left 0.3s ease-in-out;
//   z-index: 999;

//   @media (min-width: 769px) {
//     position: sticky;
//     left: 0;
//     transition: none;
//   }
// `;

export const Container = styled.div`
  position: fixed; /* Mantenha 'fixed' */
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: 100vh; /* Use 100vh para a altura total da tela */
  background-color: #286a8d;
  color: #fff;
  width: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: left 0.3s ease-in-out;
  z-index: 999;

  @media (min-width: 769px) and (min-height: 768px) {
    position: sticky;
    left: 0;
    transition: none;
  }
`;



export const Logo = styled.img`
  width: 70%;
  height: auto;
  margin-top: 50px;
  border-bottom: 1px solid #fff;
`;

export const MenuButton = styled.button`
  display: block;
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  z-index: 1000;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
