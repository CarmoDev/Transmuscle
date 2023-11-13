import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  background-color: #000c1c;
  padding: 64px 0 24px 0;
`;

export const Mark = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  img {
    width: 240px;
  }
`;

export const Politics = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  h3 {
    color: #fafafa;
  }

  div {
    display: flex;
    color: #fafafa;

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Social = styled.aside`
  a {
    display: flex;
    text-decoration: none;
    gap: 8px;
    align-items: center;

    p {
      font-size: 20px;
    }
  }

  a + a {
    margin-top: 24px;
  }
`;
