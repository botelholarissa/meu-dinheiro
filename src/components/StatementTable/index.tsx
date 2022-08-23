import { Container } from "./styles";

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

interface StatementTableProps {
    transactions: Transaction[];
}


export function StatementTable({ transactions} : StatementTableProps){
    
   return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => {
                return  (
                    <tr key={transaction.id}>
                        <td className="title">{transaction.title}</td>
                        <td className={`amount ${transaction.transactionType}`}>{transaction.transactionType === 'withdraw'? new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(-1* transaction.amount) : new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(transaction.amount)}</td>
                        <td className="category">{transaction.category}</td>
                        <td className="createdAt">{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    </Container>
   ); 
}