import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    div{
        background-color: var(--walter-white);
        padding: 2rem;
        border-radius: 0.3rem;
        &:last-child{
            background-color: var(--green-green);
        }
    }

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }
`
