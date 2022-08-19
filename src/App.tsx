import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { GlobalStyleComponent } from './styles/global';

export function App() {
  const [ TransactionModalOpen, setTransactionModalState ] = useState(false);

  function handleCloseModal(){
    setTransactionModalState(false);
  }

  function handleOpenModal(){
    setTransactionModalState(true);
  }

  return (
    <>
      <GlobalStyleComponent/>
      <TransactionModal isOpen = {TransactionModalOpen} onRequestClose ={handleCloseModal}/>
      <Header onRequestOpen = {handleOpenModal}/>
      <Dashboard/>
    </>
  );
}
