import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { GlobalStyleComponent } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyleComponent/>
      <TransactionModal/>
      <Header/>
      <Dashboard/>
    </>
  );
}
