import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --green-green: #33CC95;
        --text-green: #29A376;
        --background-gray: #F0F2F5;
        --text-gray: #969CB2;
        --title: #363F5F;
        --walter-white: #FFFFFF;
        --red-red: #E52E4D;
        --blue-blue: #0000FF;
        --logo-blue: #57DBCA;
        --transaction-orange:#E06E00;
    }
`;

