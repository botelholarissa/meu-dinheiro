import React from 'react';
import { Header } from './components/Header';
import { StatementTable } from './components/StatementTable';
import { GlobalStyleComponent } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyleComponent/>
      <Header/>
      <StatementTable/>
    </>
  );
}
