import styled from "styled-components";

export const InternalModalContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    align-items: center;

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid var(--text-gray);
        background: var(--background-gray);

        font-size: 1rem;
        font-weight: 400;

        &::placeholder {
            color: var(--text-gray);
        }

        & + input {
            margin-top: 1rem;
        }

    }

    h2 {
        font-weight: 600;
        margin-bottom: 2rem;
    }
`;


export const CloseModalButton = styled.button`
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
`;


export const TransactionGroup = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    width: 100%;
`;


interface TransactionButtonProps {
    background: string;
}

export const TransactionButton = styled.button<TransactionButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid ${(props) => props.background};;

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.2rem;

    p {
        display: inline-block;
        margin-left: 1rem;
        color: var(--title);
    }
`;


export const SubmitTransactionButton = styled.button`
    border: 1px solid #d7d7d7;
    margin-top: 1rem;

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.2rem;

    background: var(--green-green);

    color: var(--walter-white);
    font-weight: 600;

    &:hover{
        filter: brightness(0.9);
    }
    
`;