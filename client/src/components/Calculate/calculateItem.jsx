import React, {useState, useEffect} from 'react'

export const CalculateItem = ({eachCost, deleteExpense, editExpense}) => {
  const {charge, amount, id} = eachCost
  return(
    <div>
      <li>
      <span>{charge}</span>: 
      <span>${amount}</span>
      <button onClick={() => deleteExpense(id)}>Delete Expense</button>
      <button onClick={() => editExpense(id)}>Edit Expense</button>
      </li>
    </div>
  )
}