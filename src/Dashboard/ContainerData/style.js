import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  color: #333;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: #1e1e1e;
  margin: 5px 0 16px;
  text-align: center;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 24px;
  }
`;
