import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  min-height: 100dvh;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin: 10px;
  display: block;
  font-weight: bold;
  color: #fff;
`;

export const FormContainer = styled.div`
  background-color: #000c1c;
  height: 100dvh;
  width: 50%;
  padding: 20px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 44px;

  .address {
    h1 {
      margin-bottom: 24px;
    }
  }

  div {
    h1,
    h3 {
      color: #fafafa;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    margin-top: 12px;

    small {
      color: #fafafa;
    }
  }

  .laudo {
    height: 200px;
    border-radius: 8px;

    border: 1px dashed #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
      max-width: 70%;
      color: #fafafa;
      font-size: 20px;
      text-align: center;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;

      text-overflow: ellipsis;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export const Checkbox = styled.label`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-top: 24px;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #ffbc37;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 2px;
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  p {
    color: #fafafa;
    font-weight: bold;
    line-height: 16px;
    margin-left: 36px;

    span {
      font-weight: bold;
      color: #cc9933;
    }
  }
`;

export const Poster = styled.img`
  background-color: #00132b;
  height: 98%;
  width: 100%;
  border-radius: 16px;
`;

export const Button = styled.button`
  background-color: #cc9933;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

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
`;
