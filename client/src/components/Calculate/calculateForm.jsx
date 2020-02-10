import React, {useState, useEffect} from 'react'

export const CalculateForm = ({handleSubmit, setCharge, setAmount, newCharge, newAmount}) => {
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Charge</label>
        <input type='text' placeholder='add charge' onChange={setCharge} name='newCharge' value={newCharge} />
      </div>

      <div>
        <label>Amount</label>
        <input type='number' placeholder='add amount' onChange={setAmount} name='newAmount' value={newAmount}/>
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}