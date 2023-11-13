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

export const Options = styled.div`
  display: flex;
  gap: 64px;
`;
