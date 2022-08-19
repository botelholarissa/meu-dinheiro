import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { api } from './services/api';
import { GlobalStyleComponent } from './styles/global';

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  transactionType: string;
  createdAt: string;
}


export function App() {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then(response => {setTransactions(response.data);
            console.log(response.data);
        });
    }, []);


  return (
    <>
      <GlobalStyleComponent/>
      <Header/>
      <Dashboard transactions={transactions} setTransactions={setTransactions}/>
    </>
  );
}
