import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "15%"};
  padding: 10px;
  margin-top: 25px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
  &:active {
    background-color: #004080;
  }
  transition: background-color 0.3s ease;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

    @media (max-width: 768px) {
    width: 90%;
    padding: 8px;
    margin-top: 0;
    }
`;
