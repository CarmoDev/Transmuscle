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

  .swiper {
    width: 40%;
    height: 30%;
  }

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 70dvh;

    img {
      width: 60%;
    }

    .swiper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .autoplay-progress {
      width: 24px;
      height: 24px;
    }
  }
`;

export const DescriptionContainer = styled.section`
  max-width: 100%;

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
