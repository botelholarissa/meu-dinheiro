import React from 'react';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { GlobalStyleComponent } from './styles/global';

export function App() {
  return (
    <><GlobalStyleComponent></GlobalStyleComponent><Header></Header><Summary></Summary><h1></h1></>
  );
}
