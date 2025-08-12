import styled from "styled-components";

export const Input = styled.input`
  padding: 0 16px; /* Remove o padding vertical */
  height: 48px; /* Adiciona uma altura fixa */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  line-height: 48px; /* Alinha a altura da linha com a altura do input */

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
    height: 54px; /* Aumenta a altura para telas menores */
    padding: 18px 12px; /* Remove o padding vertical e ajusta o horizontal */
    line-height: 54px; /* Alinha a altura da linha com a nova altura */
  }
`;