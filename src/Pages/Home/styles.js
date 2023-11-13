import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  height: 99dvh;

  img {
    width: 600px;
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
`;
