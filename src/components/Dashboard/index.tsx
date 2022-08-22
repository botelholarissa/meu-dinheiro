import { useEffect, useState } from "react";
import { StatementTable } from "../StatementTable";
import { Summary } from "../Summary";
import { SummaryMobile } from "../SummaryMobile";
import { Container } from "./styles";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

const MinDesktopWidth = 992;

interface DashboardProps {
    transactions: Transaction[];
}

export function Dashboard ({ transactions } : DashboardProps){
    const [ isDesktop, setDesktop ] = useState(window.innerWidth > MinDesktopWidth);


  const updateMedia = () => {
    setDesktop(window.innerWidth > MinDesktopWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
    
    return (
        <Container>
            {isDesktop ? <Summary transactions={transactions}/> : <SummaryMobile transactions={transactions}/>}
            
            <StatementTable transactions={transactions}/>
        </Container>
    );
}