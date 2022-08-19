import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { StatementTable } from "../StatementTable";
import { Summary } from "../Summary";
import { Container } from "./styles";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

interface DashboardProps {
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
}

export function Dashboard ({ transactions, setTransactions } : DashboardProps){
    
    return (
        <Container>
            <Summary/>
            <StatementTable transactions={transactions}/>
        </Container>
    );
}