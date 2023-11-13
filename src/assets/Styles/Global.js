import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  body, section, main {
    background-color: #00132B;
  }
  
  p, span, strong {
    color: #fff;
    font-size: 16px;
  } 
  
  h1, h2, h3, h4, h5, h6 {
    color: #CC9933;
  } 

  button: {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #00132B;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #CC9933;
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a77127;
}
`;
