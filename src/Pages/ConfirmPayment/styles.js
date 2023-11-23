import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  h4 {
    text-align: center;
    max-width: 480px;
    width: 80%;
    color: #fafafa;

    strong {
      color: #cc9933;
    }
  }

  p {
    font-weight: bold;
  }

  a {
    color: #cc9933;
    font-weight: bold;
  }
`;
