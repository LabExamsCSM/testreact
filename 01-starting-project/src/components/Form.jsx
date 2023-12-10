import React, { useState } from "react";

function Form({ values, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input
            type="number"
            defaultValue={values.initialInvestment}
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input
            type="number"
            defaultValue={values.annualInvestment}
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input
            type="number"
            defaultValue={values.expectedReturn}
            required
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input
            type="number"
            defaultValue={values.duration}
            required
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default Form;
