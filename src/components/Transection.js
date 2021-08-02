import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transection }) => {
    const { deleteTransectin } = useContext(GlobalContext);
    const sign = transection.amount < 0 ? '-' : '+';
    return (
        <li className={transection.amount < 0 ? 'minus' : 'plus'}>
            {transection.text} <span>{sign}${Math.abs(transection.amount)}</span><button onClick={() => deleteTransectin(transection.id)} className="delete-btn">x</button>
        </li>
    )
}