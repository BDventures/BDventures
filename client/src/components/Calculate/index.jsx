import React, { useState, useEffect } from "react";
import { CalculateList } from "./calculateList.jsx";
import { CalculateForm } from './calculateForm.jsx'
export const Calculate = () => {
  const initialCosts = [
    { id: 'Rent', charge: "Rent", amount: 1500 },
    { id: 'Car', charge: "Car", amount: 530 },
    { id: 'Phone', charge: "Phone", amount: 50 }
  ];

  const [expenses, setExpenses] = useState(initialCosts);
  const [newCharge, setNewCharge] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const setCharge = (e) => {
    // console.log(e.target.value)
    setNewCharge(e.target.value)
  }

  const setAmount = (e) => {
    setNewAmount(e.target.value)
  }

  const deleteExpense = id => {
    const tempExpenses = expenses.filter(item => item.id !== id)
    setExpenses(tempExpenses)
  }

  const editExpense = id => {
    const temp = expenses.filter(item => item.id === id)
    const tempExpenses = [...expenses]
    console.log(temp[0])
    // const singleChange = {
    //   id: temp.id,
    //   charge: newCharge,
    //   amount: newAmount
    // }

    // if(tempExpenses.id = temp[0].id) {
    //   setExpenses([tempExpenses, singleChange])
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const singleExpense = {
      id: newCharge,
      charge: newCharge,
      amount: newAmount
    }

    setExpenses([...expenses, singleExpense])

    setNewCharge('')
    setNewAmount('')
  }

  return (
    <div>
      <CalculateForm setCharge={setCharge} setAmount={setAmount} handleSubmit={handleSubmit} newCharge={newCharge} newAmount={newAmount}/>

      <h1>Budget Calculator</h1>
      <CalculateList initialCost={expenses} deleteExpense={deleteExpense} editExpense={editExpense}/>

      <h1>Total Spendings: ${expenses.reduce((total, current) => {
        return (total+= (parseInt(current.amount)))
      }, 0)}</h1>
    </div>
  );
};
