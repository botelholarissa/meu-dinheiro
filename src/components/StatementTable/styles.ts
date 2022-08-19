import styled from "styled-components";

export const Container = styled.div`
   margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.3rem;

        td {
            background: var(--walter-white);
            color: var(--text-gray);
            padding: 1rem 2rem;
            border-radius: 0.3rem;

            &:first-child {
                color: var(--title);
            }

            &.deposit{
                color: var(--text-green);
            }

            &.withdraw{
                color: var(--red-red);
            }
        }

        th {
            color: var(--text-gray);
            font-weight: 400;
            padding: 1rem 1rem;
            text-align: left;
        }
    }
`