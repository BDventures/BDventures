import React, {useState, useEffect} from 'react'

export const CalculateItem = ({eachCost}) => {
  const {charge, amount} = eachCost
  return(
    <div>
      <li>
      <span>{charge}</span>: 
      <span>${amount}</span>
      </li>
    </div>
  )
}