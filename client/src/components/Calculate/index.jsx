import React, { useState, useEffect } from "react";
import { CalculateList } from "./calculateList.jsx";
import { CalculateForm } from './calculateForm.jsx'
export const Calculate = () => {
  const initialCosts = [
    { id: 1, charge: "Rent", amount: 1500 },
    { id: 2, charge: "Car", amount: 530 },
    { id: 3, charge: "Phone", amount: 50 }
  ];

  const [expenses, setExpenses] = useState(initialCosts);
  const [newCharge, setNewCharge] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const setCharge = (e) => {
    console.log(e.target.value)
    setNewCharge(e.target.value)
  }

  const setAmount = (e) => {
    setNewAmount(e.target.value)
  }

  useEffect(() => {
    console.log(expenses, 'what is this')
  }, [expenses])

  const handleSubmit = (e) => {
    e.preventDefault()

    let id = expenses.length
    
    const singleExpense = {
      id: id+1,
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
      <CalculateList initialCost={expenses} />

      <h1>Total Spendings: ${expenses.reduce((total, current) => {
        return (total+= (parseInt(current.amount)))
      }, 0)}</h1>
    </div>
  );
};
