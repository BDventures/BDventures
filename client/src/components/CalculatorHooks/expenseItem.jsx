import React, {useState, useEffect} from 'react'

export const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
  const {id, charge, amount} = expense
  return(
    <li>
      <div>
        <span>{charge}</span>:
        <span>${amount}</span>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>

    </li>
  )
}