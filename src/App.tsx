import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { GlobalStyleComponent } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyleComponent/>
      <Header/>
      <Dashboard/>
    </>
  );
}
