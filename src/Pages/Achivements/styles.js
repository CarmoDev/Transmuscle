import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 99dvh;

  h1 {
    font-size: 64px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const AchivementsContainer = styled.div`
  width: 30%;
  height: 80dvh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;

  border: 1px solid #f00;
`;

export const AchivementsBar = styled.div`
  height: 100%;
  width: 4px;
  border-radius: 100px;
  background-color: #fafafa;
  grid-column: 2;
`;

export const Achivement = styled.div`
  grid-column: ${({ isLeft }) => (isLeft ? 1 : 3)};
  position: absolute;
  left: ${({ isLeft }) => isLeft && 0};
  right: ${({ isLeft }) => !isLeft && 0};
  top: ${({ position }) => `${position}%`};

  display: flex;
  align-items: center;
  flex-direction: ${({ isLeft }) => (isLeft ? "row-reverse" : "row")};

  .date {
    color: #fff;
    border: 1px solid #fff;
    padding: 4px 8px;
  }

  .achieves {
    display: flex;
    flex-direction: column;
    max-width: 235px;
  }

  & + & {
    margin-top: 64px;
  }
`;
