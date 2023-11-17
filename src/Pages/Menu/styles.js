import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 60px;
  top: 0px;
  position: sticky;
  z-index: 20;
  width: 100%;
  background-color: #00132b;

  div {
    img {
      width: 80px;
    }
  }

  a {
    text-decoration: none;
    position: relative;

    p {
      font-size: 20px;
    }
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #cc9933;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const HamburguerContainer = styled.div`
  padding: 24px 12px 0 24px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HamburguerMenu = styled.button`
  display: flex;
  background: transparent;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #607b96;
  cursor: pointer;
  position: relative;
  z-index: 300;
  width: 30px;
  height: 20px;
  margin-right: 8px;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    height: 4px;
    width: 30px;
    background-color: #607b96;
    box-shadow: 0 6px #607b96, 0 -6px #607b96;
    border-radius: 20px;
    transition: 0.3s;
  }

  &::after {
    position: absolute;
    box-shadow: none;
  }

  &.ativo::after {
    transform: rotate(-45deg);
  }

  &.ativo::before {
    transform: rotate(45deg);
    box-shadow: none;
  }
`;

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .Active {
    border-bottom: 3px solid #fea55f;
    color: #fff;
  }

  a {
    height: 100%;
    border: 1px solid #1e2d3d;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #607b96;

    :focus {
      border-bottom: 3px solid #fea55f;
    }
  }

  p {
    padding: 0 24px;
  }
`;

export const OptionsList = styled.div`
  height: 0;
  width: 0;
  background-color: #011627;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  font-size: 0;

  opacity: 0;
  z-index: 250;

  top: 15px;
  right: 10px;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: 0.4s;

  &.ativo {
    font-size: 12px;
    opacity: 1;
    height: 30%;
    width: 95%;
    padding-top: 15%;

    a {
      border: 0;
      border-bottom: 1px solid #1e2d3d;
      width: 100%;
      height: fit-content;
      padding: 10px 0;
    }

    a:first-of-type {
      border-top: 1px solid #1e2d3d;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 64px;
`;
