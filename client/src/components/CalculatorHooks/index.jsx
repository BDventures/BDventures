import React, { useState, useEffect } from "react";
import { ExpenseForm } from "./expenseForm.jsx";
import { ExpenseList } from "./expenseList.jsx";

const ReactCalculator = () => {
  const initialExpenses = [
    { id: 1, charge: "rent", amount: 1600 },
    { id: 2, charge: "car", amount: 500 },
    { id: 3, charge: "credit card bill", amount: 1200 }
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  const handleCharge = e => {
    // console.log(`charge: ${e.target.value}`)
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    // console.log(`amount : ${e.target.value}`)
    setAmount(e.target.value);
  };

  const alertError = () => {
    alert('BOTH CHARGE AND AMOUNT HAVE TO BE FILLED OUT!')
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount}: item
        })
        setExpenses(tempExpenses)
        setEdit(false)
      } else {
        let id = expenses.length
        const singleExpense = {id: id+1, charge, amount}
  
        setExpenses([...expenses, singleExpense])
      }
      setCharge('')
      setAmount('')
    }

    else {
      //handle alert called
      alertError()
    }
  };

  const clearExpenses = () => {
    setExpenses([])
  }

  const handleDelete = (id) => {
    const tempExpenses = expenses.filter(item => item.id !== id)
    setExpenses(tempExpenses)
  }

  const handleEdit = (id) => {
    const editExpense = expenses.filter(item => item.id === id)
    // console.log(editExpense[0].id)

    let {charge, amount} = editExpense[0]
    // amount = ''
    setId(editExpense[0].id)
    setEdit(true)
  }

  return (
    <div>
      <h1>Budget Calculator</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} clearExpenses={clearExpenses} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </main>
      <h1>
        Total Spending:$
        {expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount));
        }, 0)}
      </h1>
    </div>
  );
};

export default ReactCalculator;