import React, { useState, useEffect } from "react";
import { CalculateItem } from "./calculateItem.jsx";

export const CalculateList = ({ initialCost }) => {
  return (
    <div>
      <ul>
        {initialCost.map(eachCost => {
          return <CalculateItem eachCost={eachCost} />;
        })}
      </ul>
    </div>
  );
};
