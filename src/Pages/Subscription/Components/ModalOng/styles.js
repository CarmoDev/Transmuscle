import styled from "styled-components";

export const Header = styled.header`
  align-self: center;
  width: 90%;

  h4 {
    color: #00132b;
  }
`;

export const Footer = styled.footer``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  input[type="text"],
  input[type="email"] {
    width: 80%;
    flex-shrink: 0;
    border-radius: 8px;
    outline: none;
    border: 1px solid #aaa;
    padding: 8px 12px;
    font-size: 16px;
  }

  input[type="file"] {
    width: 80%;
    font-size: 16px;
  }
`;

export const PayButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fafafa;
  background-color: #1f71ff;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2888ff;
  }

  &:active {
    background-color: #0a51eb;
  }
`;
