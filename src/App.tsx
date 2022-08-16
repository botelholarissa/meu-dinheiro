import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { StatementTable } from './components/StatementTable';
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
