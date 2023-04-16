import { useEffect, useState } from "react";
import "./App.css";
import TaxCalculator from "./Components/TaxCalculator";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <h1>Tax Calculator</h1>
          <TaxCalculator />
        </div>
      )}
    </div>
  );
}

export default App;
