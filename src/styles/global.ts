import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
        background-color: var(--background-gray);
    }

    .modal-content {
        width: 100%;
        max-width: 600px;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        background: var(--walter-white);
    }

    .overlay-transaction-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
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

