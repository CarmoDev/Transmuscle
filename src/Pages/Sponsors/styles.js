import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: #000c1c;
  margin-top: 64px;
  padding: 24px 0;

  h1 {
    font-size: 48px;
    margin-bottom: 48px;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Sponsor = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  img {
    width: 80px;
  }

  h2 {
    color: #ffff;
    font-size: 30px;
  }

  #AzumaDojo {
    width: 140px;
    border-radius: 100%;
  }

  @media screen and (max-width: 768px) {
    #AzumaDojo {
      width: 90px;
    }
  }
`;
