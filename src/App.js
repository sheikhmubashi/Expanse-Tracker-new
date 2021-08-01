import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { IncomeExpances } from './components/IncomeExpances'
import { TransectionList } from './components/TransectionList'
import { AddTransection } from './components/AddTransection'
import { GlobalProvider } from './context/GlobalState';


import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
     <Balance /> 
     <IncomeExpances />
     <TransectionList />
     <AddTransection />
     </div>
    </GlobalProvider>
  )
}

export default App;