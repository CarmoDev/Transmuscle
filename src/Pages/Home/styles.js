import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  height: 99dvh;
  overflow-x: hidden;

  img {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      width: 60%;
    }
  }
`;

export const DescriptionContainer = styled.section`
  max-width: 40%;

  h1 {
    font-size: 64px;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;

    h1 {
      font-size: 24px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 14px;
    }
  }
`;
