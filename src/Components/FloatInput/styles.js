import styled from "styled-components";

export const Input = styled.div`
  font-size: 16px;
  position: relative;
  padding-top: 12px;

  & + & {
    margin-top: 4px;
  }

  input {
    padding-top: 8px;
    width: 100%;
    color: #fafafa;
    background-color: #000c1c;

    border: none;
    border-bottom: 2px solid #bac4e7;
    outline: none;
    font-size: 16px;
    min-width: 220px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none;

    &:focus {
      border-bottom: 2px solid #fafafa;
    }

    ::placeholder {
      color: transparent;
    }
  }

  input:disabled {
    cursor: not-allowed;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #000c1c inset;
    -webkit-text-fill-color: #fafafa !important;
  }

  label {
    pointer-events: none;
    position: absolute;
    color: #b0b0b0;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  input:required:invalid + label {
    color: red;
  }

  input:focus:required:invalid + label:after {
    content: "*";
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 12px;
    margin-top: 0;
    color: #fafafa;
  }

  small {
    color: #fc5050;
  }
`;

export const Select = styled.div`
  font-size: 16px;
  position: relative;
  padding-top: 12px;
  margin-top: 12px;
  cursor: pointer;

  select {
    padding-top: 8px;
    width: 100%;
    cursor: pointer;
    color: #fafafa;
    font-weight: bold;
    background-color: #000c1c;

    border: none;
    border-bottom: 2px solid #bac4e7;
    outline: none;
    font-size: 16px;
    min-width: 220px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    appearance: none;
    -webkit-appearance: none;
    box-shadow: none;

    &:focus {
      border-bottom: 2px solid #fafafa;
    }

    ::placeholder {
      color: transparent;
    }
  }

  select:disabled {
    cursor: not-allowed;
  }

  label {
    pointer-events: none;
    position: absolute;
    color: #b0b0b0;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  select:required:invalid + label {
    color: red;
  }

  select:focus:required:invalid + label:after {
    content: "*";
  }

  select:focus + label,
  select:not(:placeholder-shown) + label {
    font-size: 12px;
    margin-top: 0;
    color: #fafafa;
  }
`;
