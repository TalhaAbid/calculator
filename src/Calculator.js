import React, { useState } from "react";
import Result from "./Result";
import Button from "./Button";
import { create, all } from "mathjs";
const Calculator = () => {
  const [value, setValue] = useState("");

  const resultChange = (val) => {
    setValue(value + val);
  };

  const handleButton = (val) => {
    if (val === "=") {
      return calculateResult(value);
    } else if (val === "C") {
      clear();
    } else {
      return resultChange(val);
    }
  };
  const clear = () => setValue("");

  const calculateResult = (value) => {
    const math = create(all);
    setValue(math.evaluate(value));
  };
  return (
    <div className="calculator">
      <Result currVal={value} resultChange={resultChange} />
      <div className="calculator-buttons">
        <Button
          btnStyle="calc-button is-clear"
          label="C"
          handleClick={handleButton}
        />
        <Button btnStyle="calc-button" label="/" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="7" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="8" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="9" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="*" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="4" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="5" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="6" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="-" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="1" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="2" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="3" handleClick={handleButton} />
        <Button btnStyle="calc-button" label="+" handleClick={handleButton} />
        <Button
          btnStyle="calc-button is-zero"
          label="0"
          handleClick={handleButton}
        />
        <Button
          btnStyle="calc-button is-equals"
          label="="
          handleClick={handleButton}
        />
      </div>
    </div>
  );
};

export default Calculator;
