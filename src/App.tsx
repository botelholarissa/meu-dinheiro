import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
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
  const [ TransactionModalOpen, setTransactionModalState ] = useState(false);

  function handleCloseModal(){
    setTransactionModalState(false);
  }

  function handleOpenModal(){
    setTransactionModalState(true);
  }

  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then(response => {setTransactions(response.data);
            console.log(response.data);
        });
    }, []);


  return (
    <>
      <GlobalStyleComponent/>
      <TransactionModal isOpen = {TransactionModalOpen} onRequestClose ={handleCloseModal} transactions={transactions} setTransactions={setTransactions}/>
      <Header onRequestOpen = {handleOpenModal}/>
      <Dashboard transactions={transactions}/>
    </>
  );
}
