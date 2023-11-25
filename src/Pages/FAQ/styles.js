import styled from "styled-components";

export const Container = styled.section`
  margin-top: 64px;

  h1 {
    font-size: 64px;
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const ContactContainer = styled.form`
  width: fit-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: relative;

  .content {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 60%;

    @media screen and (max-width: 1100px) {
      width: 80%;
    }
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #011221 inset;
    -webkit-box-shadow: 0 0 0 30px #011221 inset;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #465e77 !important;
  }

  @media screen and (max-width: 1100px) {
    align-self: flex-end;
    width: 100%;
    height: 100%;
    position: initial;

    ::after {
      display: none;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #607b96;
  font-size: 16px;
  width: 100%;
`;

export const ContactInfo = styled.input`
  background-color: #011221;
  border: 2px solid #1e2d3d;
  border-radius: 8px;
  color: #465e77;
  padding: 10px 8px;
  font-weight: 600;
  font-size: 16px;

  &:focus {
    border: 1px solid #607b96;
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
    outline: 0;
  }
`;

export const MessageArea = styled.textarea`
  background-color: #011221;
  border: 2px solid #1e2d3d;
  border-radius: 8px;
  color: #465e77;
  padding: 10px 8px;
  font-weight: 600;
  font-size: 16px;
  resize: none;

  &:focus {
    border: 1px solid #607b96;
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
    outline: 0;
  }
`;

export const Submit = styled.button`
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

  @media screen and (max-width: 1100px) {
    align-self: center;
  }
`;

export const Submitted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  position: relative;
  gap: 20px;
  padding: 16px;

  div {
    text-align: center;
    max-width: 80%;
  }

  h1 {
    color: white;
  }

  h2 {
    color: #607b96;
    line-height: 28px;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
