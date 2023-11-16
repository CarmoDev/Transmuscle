import styled from "styled-components";

export const Header = styled.header`
  align-self: center;
  width: 90%;

  section {
    margin-top: 12px;
    background-color: transparent;
    display: flex;
    gap: 16px;

    div {
      display: flex;
      flex-direction: column;

      p {
        color: #000;
      }
    }
  }
`;

export const Input = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 4px 8px;

  input {
    width: 100%;
    font-size: 16px;
    padding: 8px 8px;
    border: none;
    outline: none;
  }
`;

export const CardContainer = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & + & {
    margin-top: 12px;
  }

  div,
  select {
    width: 100%;
    height: 100%;
  }

  select {
    font-size: 16px;
    padding: 10px 8px;
  }
`;

export const Footer = styled.footer``;

export const PayButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fafafa;
  background-color: #1f71ff;
  padding: 8px 12px;
`;
