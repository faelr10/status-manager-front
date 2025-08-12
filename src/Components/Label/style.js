//estilo label
import styled from "styled-components";

export const Label = styled.label`
  display: block;
  width: ${(props) => props.width || "100%"};
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;
