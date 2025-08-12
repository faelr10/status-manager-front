import styled from "styled-components";

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: #fff;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 6px 12px;
  }
`;
