import { useState } from "react";

const TermsAndConditions = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <div>
      <h1>Terms & Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, libero.
      </p>

      <div>
        <label htmlFor="agree">
          <input
            id="agree"
            type="checkbox"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
          />{" "}
          I accepted the terms and conditions
        </label>
      </div>
      <button disabled={!isChecked}>Submit</button>
    </div>
  );
};

export default TermsAndConditions;
