import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin-top: -3.5rem;

    div{
        background-color: var(--walter-white);
        padding: 2rem;
        border-radius: 0.3rem;
        font-size: 2rem;
        font-weight: 600;
        &:last-child{
            background-color: var(--green-green);
            color: var(--walter-white);
        }
    }

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 400;
    }
`
