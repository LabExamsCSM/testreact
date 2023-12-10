import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import Results from "./components/Results";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = values.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [inputIdentifier]: Number(newValue),
      };
      return updatedValues;
    });
  }

  const tableValues = calculateInvestmentResults({ ...values });

  return (
    <>
      <Header />
      <Form values={values} handleChange={handleChange} />
      {isValidInput ? (
        <Results tableValues={tableValues} initialInvestment={values.initialInvestment} />
      ) : (
        <p className="center">Please enter Duration value above zero.</p>
      )}
    </>
  );
}

export default App;
