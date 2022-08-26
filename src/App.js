import React from 'react'
import Header from './components/Header'
import Quem from './components/Quem'
import Projetos from './components/Projetos'
import Propostas from './components/Propostas'
import Contatos from './components/Contatos'
import './App.css'

function App() {
  return (
    <div id="App">
      <Header />
      <Quem />
      <Projetos />
      <Propostas />
      <Contatos />
    </div>
  );
}

export default App;
