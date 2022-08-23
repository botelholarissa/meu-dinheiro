import styled from "styled-components";

export const Container = styled.div`

@media (max-width: 1000px) {
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.3rem;
        tr {
            width: 80%;
            margin: 1rem 5% 0.5rem;
            display: grid;
            grid-template-areas: 
            "title title"
            "amount amount"
            "category createdAt";
        }

        td {
            width: 100%;
            background: var(--walter-white);
            color: var(--text-gray);
            padding: 1rem 2rem;
            border-radius: 0.3rem;

            &:first-child {
                color: var(--title);
                font-weight: 500;
            }

            &.deposit{
                color: var(--text-green);
            }

            &.withdraw{
                color: var(--red-red);
            }
            
            &.amount {
                grid-area: amount;
                font-size: 1.35rem;
                padding: 0rem 2rem 1.5rem;
            }

            &.title {
                grid-area: title;
            }

            &.category {
                grid-area: category;
            }

            &.createdAt {
                grid-area: createdAt;
                text-align: right;
            }
        }

        

        th {
            display: none;
        }
    }
    }

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