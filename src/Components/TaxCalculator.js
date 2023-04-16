import React, { useState } from "react";
import TaxRateSelector from "./TaxRateSelector";
import { createContext } from "react";

export const AppText = createContext();
const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxResult, setTaxResult] = useState(0);
  const handleIncome = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <AppText.Provider value={{ income, setIncome, taxResult, setTaxResult }}>
        <form>
          <h2>Tax Result: {taxResult}</h2>
          <p className="type">Income:</p>
          <input
            id="number"
            value={income}
            type="text"
            onChange={handleIncome}
          />
          <TaxRateSelector />
        </form>
      </AppText.Provider>
    </div>
  );
};

export default TaxCalculator;
