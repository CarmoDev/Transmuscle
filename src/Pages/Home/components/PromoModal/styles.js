import styled from "styled-components";

export const Overlay = styled.main`
  width: 100dvw;
  height: 100dvh;
  z-index: 5000;
  position: fixed;
  overflow: hidden;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Subscribe = styled.button`
  position: absolute;
  font-weight: bold;
  background-color: #cc9933;
  color: #fafafa;
  bottom: 20px;
  font-size: 24px;
  border-radius: 8px;
  padding: 8px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #d1a73e;
  }

  &:active {
    background-color: #a77127;
  }
`;
