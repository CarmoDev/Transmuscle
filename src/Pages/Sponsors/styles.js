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

  footer {
    margin-top: 32px;

    a {
      background-color: #cc9933;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 16px;
      border: none;
      color: white;
      cursor: pointer;
      transition: 0.3s;
      font-weight: 600;
      letter-spacing: 2px;
      text-decoration: none;

      :hover {
        transform: scale(1.01);
      }

      &:hover {
        background-color: #d1a73e;
      }

      &:active {
        background-color: #a77127;
      }

      &[disabled] {
        background-color: #ccc;
        cursor: default;
      }
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }
`;

export const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Sponsor = styled.a`
  width: 280px;
  height: 200px;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 14px;
  align-items: center;
  justify-content: center;

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

  #MrRice {
    width: 200px;
  }

  #vidaativa {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    #AzumaDojo {
      width: 90px;
    }
  }
`;
