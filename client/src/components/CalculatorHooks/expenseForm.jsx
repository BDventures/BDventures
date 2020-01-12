import React, {useState, useEffect} from 'react'
import { jsxNamespacedName } from '@babel/types'

export const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit}) => {

  return(
    <form style={{display: 'flex'}} onSubmit={handleSubmit }>
      <div>
        <label>Charge</label>
        <input type='text' placeholder='add charge' name='charge' value={charge} onChange={handleCharge}/>
      </div>

      <div>
        <label>Amount</label>
        <input type='number' placeholder='add amount' name='amount' value={amount} onChange={handleAmount}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}