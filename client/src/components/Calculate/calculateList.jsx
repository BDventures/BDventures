import React, { useState, useEffect } from "react";
import { CalculateItem } from "./calculateItem.jsx";

export const CalculateList = ({ initialCost, deleteExpense, editExpense }) => {
  return (
    <div>
      <ul>
        {initialCost.map(eachCost => {
          return <CalculateItem eachCost={eachCost} deleteExpense={deleteExpense} key={initialCost.id} editExpense={editExpense}/>;
        })}
      </ul>
    </div>
  );
};
