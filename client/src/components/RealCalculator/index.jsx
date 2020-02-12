import React, { useState, useEffect } from "react";

export const RealCalculator = () => {
  let initialValue = 0;
  const [total, setTotal] = useState(initialValue);
  const [total2, setTotal2] = useState(null);
  const [final, setFinal] = useState(null)
  const [event, setEvent] = useState('')
  const [flag, setFlag] = useState(false);
console.log(total, total2)
  const tempHold = (num) => {
    setTotal2(parseInt(num))
  };
  
  const updateTotal = () => {
    if(event === 'add') setFinal(total + total2)

    if(event === 'subtract') setFinal(total2 - total)

    if(event === 'multiply') setFinal(total2 * total)

    if(event === 'divide') setFinal(total2 / total)
  }

  useEffect(() => {
    setTotal(initialValue);
    setFlag(false)
  }, [flag === true]);

  const setTotalNum = e => {
    setEvent(e.target.name);
    let temp = total

    tempHold(temp)
    setFlag(true);
  };

  const handleClick = e => {
    setTotal(parseInt(total + e.target.value));
  };

  return (
    <div className="calculator_buttons">
      <div>
        <input value={total}></input>
      </div>

      <div onClick={handleClick}>
        <div className="row0">
          <button name="c" value="c">
            c
          </button>
          <button onClick={setTotalNum} name="divide" value="%">
            %
          </button>
        </div>

        <div className="row1">
          <button type="number" name="7" value="7">
            7
          </button>
          <button type="number" name="8" value="8">
            8
          </button>
          <button type="number" name="9" value="9">
            9
          </button>
          <button  onClick={setTotalNum}name="multiply" value="x">
            x
          </button>
        </div>

        <div className="row2">
          <button type="number" name="4" value="4">
            4
          </button>
          <button type="number" name="5" value="5">
            5
          </button>
          <button type="number" name="6" value="6">
            6
          </button>
          <button onClick={setTotalNum} name="subtract" value="-">
            -
          </button>
        </div>

        <div className="row3">
          <button type="number" name="1" value="1">
            1
          </button>
          <button type="number" name="2" value="2">
            2
          </button>
          <button type="number" name="3" value="3">
            3
          </button>
          <button onClick={setTotalNum} name="add" value="+">
            +
          </button>
        </div>

        <div className="row4">
          <button name="0" value="0">
            0
          </button>
          <button name="." value=".">
            .
          </button>
          <button onClick={updateTotal} name="equals" value="=">
            =
          </button>
        </div>
      </div>
      {final}
    </div>
  );
};
