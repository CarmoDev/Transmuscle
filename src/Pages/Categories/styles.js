import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 64px;
    margin-bottom: 24px;
  }

  button {
    margin-top: 28px;
    background-color: #c93;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    padding: 18px 40px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #d1a73e;
      transform: scale(1.05);
    }

    &:active {
      background-color: #a77127;
      transform: scale(0.95);
    }
  }
`;

export const CategoriesContainer = styled.section`
  width: 80%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
`;

export const Category = styled.article`
  padding: 22px 24px;

  grid-column: ${({ isLast }) => isLast && "span 2"};

  background: rgba(0, 47, 94, 0.42);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(0, 47, 94, 0.3);

  h2 {
    text-decoration: underline;
    color: #fafafa;
    text-align: center;
    font-size: 20px;
  }
`;

export const Rules = styled.article`
  margin-top: 16px;
  display: grid;

  grid-template-rows: auto auto auto;
  grid-template-columns: ${({ isPrelast, isLast }) =>
    isPrelast || isLast ? "1fr 1fr" : "1fr"};

  div + div {
    margin-top: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    margin-left: 40px;

    li {
      color: #fafafa;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    ul {
      margin-left: 0px;
    }
  }
`;
