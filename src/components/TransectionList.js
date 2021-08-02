import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transection';

export const TransectionList = () => {
    const { transection } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transection.map((transection) => (<Transaction key={transection.id} transection={transection}/>))}
                
            </ul>
        </>
    )
}