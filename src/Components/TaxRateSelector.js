import React, { useState } from "react";
import FormReset from "./FormReset";
import { useContext } from "react";
import { AppText } from "./TaxCalculator";

const TaxRateSelector = () => {
  const { income, setIncome, setTaxResult } = useContext(AppText);
  const [taxRate, setTaxRate] = useState(10);
  const [isErrorOne, setIsErrorOne] = useState(false);
  const [isErrorTwo, setIsErrorTwo] = useState(false);

  const handleTaxSelected = (e) => {
    const val = Number(e.target.value);
    setTaxRate(val);
  };

  const computeTaxPercentage = (e) => {
    e.preventDefault();

    if (isNaN(income)) {
      setIsErrorOne(false);
      setIsErrorTwo(true);
    } else if (income.length > 7) {
      setIsErrorTwo(false);
      setIsErrorOne(true);
    } else {
      const value = Number(income) * Number(taxRate);
      const completed = value / 100;
      setIncome(income);
      setTaxResult(completed);
      setIsErrorOne(false);
      setIsErrorTwo(false);
    }
  };

  return (
    <div>
      <p className="type">Tax rate:</p>
      <select className="tax-rate" value={taxRate} onChange={handleTaxSelected}>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={30}>30%</option>
      </select>
      <div>
        <button
          className="tax-result"
          type="submit"
          onClick={computeTaxPercentage}
        >
          Calculate my Income Tax
        </button>
      </div>
      <FormReset
        setIncome={setIncome}
        setTaxResult={setTaxResult}
        setTaxRate={setTaxRate}
        setIsErrorOne={setIsErrorOne}
        setIsErrorTwo={setIsErrorTwo}
        isErrorOne={isErrorOne}
        isErrorTwo={isErrorTwo}
      />
    </div>
  );
};

export default TaxRateSelector;
