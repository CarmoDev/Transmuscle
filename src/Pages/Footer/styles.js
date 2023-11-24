import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  background-color: #000c1c;
  padding: 64px 0 24px 0;
  p {
    align-self: flex-end;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    p {
      align-self: center;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
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

  @media screen and (max-width: 768px) {
    h2 {
      display: none;
    }

    img {
      width: 120px;
    }
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

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    justify-content: space-evenly;
    align-items: center;

    a + a {
      margin-top: 0;
    }

    p {
      display: none;
    }
  }
`;
