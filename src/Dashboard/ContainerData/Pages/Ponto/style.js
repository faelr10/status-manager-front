import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  align-items: center;
  justify-content: flex-start;
  color: #333;
`;

export const BoxSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding-bottom: 20px;

  gap: 50px;

  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
  }
`;

export const ContainerPonto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  overflow-y: auto;

  border: 1px solid #ccc;
`;
