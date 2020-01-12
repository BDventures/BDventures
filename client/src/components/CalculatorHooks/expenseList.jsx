import React, {useState, useEffect} from 'react'
import {ExpenseItem} from './expenseItem.jsx'

export const ExpenseList = ({expenses, clearExpenses, handleDelete, handleEdit}) => {
  return(
    <>
    <ul>
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>
      })}
    </ul>
    {expenses.length > 0 && (<button onClick={clearExpenses}>Clear Expenses</button>)}
    </>
  )
}