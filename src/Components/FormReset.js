import React from "react";

const FormReset = ({
  setIncome,
  setTaxResult,
  setIsErrorOne,
  setTaxRate,
  setIsErrorTwo,
  isErrorOne,
  isErrorTwo,
}) => {
  const handleReset = (e) => {
    e.preventDefault();
    setIncome("");
    setTaxResult(0);
    setTaxRate(10);
    setIsErrorOne(false);
    setIsErrorTwo(false);
  };
  return (
    <div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      {isErrorOne && <p style={{ color: "red" }}>Maximum of 7 digits only</p>}
      {isErrorTwo && <p style={{ color: "red" }}>Please input number only</p>}
    </div>
  );
};

export default FormReset;
