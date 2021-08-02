import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpances = () => {
    const { transection } = useContext(GlobalContext);
    const amounts =  transection.map(transection => transection.amount)

    const income =  amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2); 
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expanse</h4>
                <p id="money-plus" className="money plus">{expense}</p>
            </div>
        </div>
    )
}