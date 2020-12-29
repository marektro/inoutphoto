import { format } from "prettier";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: black;
        font-family: 'Barlow';
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Barlow';
    }

    ul {
        padding: 0;
        margin: 0;
    }

    h2 {
        // text-transform: uppercase;
        color: white;
        text-shadow: 0px 0px 4px black;
        font-size: 3rem;
        font-weight: 100;
        text-align: center;
        margin: 0;
    }
`;

export default GlobalStyle;