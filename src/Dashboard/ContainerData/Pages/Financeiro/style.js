import styled from "styled-components";

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 35%;
  height: 100%;
  gap: 20px;
  /* border: 1px solid #ccc; */

  @media (max-width: 768px) {
    width: 90%;
    height: 5vh;
  }
`;

export const BoxDataFinanceiro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;