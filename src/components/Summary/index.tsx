import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from '../Summary/styles';

interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

interface SummaryProps {
    transactions: Transaction[];
}


export function Summary({ transactions } : SummaryProps) {
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.transactionType === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdrawals -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdrawals: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <h2>Entrada</h2>
                    <img src={incomeImg} alt="Círculo verde sem preenchimento com seta verde para cima." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <h2>Saída</h2>
                    <img src={outcomeImg} alt="Círculo vermelho sem preenchimento com seta vermelha para baixo." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(summary.withdrawals)}</strong>
            </div>
            <div>
                <header>
                    <h2>Total</h2>
                    <img src={totalImg} alt="Cifrão branco em fundo branco." />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',  {style: 'currency', currency: 'BRL'}).format(summary.total)}</strong>
            </div>
        </Container>
    );
};