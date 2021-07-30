import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { IncomeExpances } from './components/IncomeExpances'
import { TransectionList } from './components/TransectionList'
import { AddTransection } from './components/AddTransection'



import "./App.css";

const App = () => {
  return (
    <div>
     <Header />
     <div className="container">
     <Balance /> 
     <IncomeExpances />
     <TransectionList />
     <AddTransection />
     </div>
    </div>
  )
}

export default App;