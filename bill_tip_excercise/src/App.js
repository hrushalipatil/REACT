import { useState } from "react";

// Define the main App component
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

// Define the TipCalculator component
function TipCalculator() {
  // Define state variables
  const [bill, setBill] = useState(""); // Bill amount input
  const [percentage1, setPercentage1] = useState(0); // First percentage for tip
  const [percentage2, setPercentage2] = useState(0); // Second percentage for tip

  // Calculate the tip based on the average of the two percentages
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  // Function to handle reset button click
  function handleReset() {
    setBill(""); // Reset the bill to an empty string
    setPercentage1(0); // Reset the first percentage to 0
    setPercentage2(0); // Reset the second percentage to 0
  }

  // Render the TipCalculator component
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPerCentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like my service?
      </SelectPerCentage>
      <SelectPerCentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like my service?
      </SelectPerCentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

// Define the BillInput component
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much is bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))} // Convert input value to number
      />
    </div>
  );
}

// Define the SelectPerCentage component
function SelectPerCentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))} // Convert select value to number
      >
        <option value="0">Disattisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">Good(10%)</option>
        <option value="15">Amazing (15%)</option>
      </select>
    </div>
  );
}

// Define the Output component
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill}+${tip} tip)
    </h3>
  );
}

// Define the Reset component
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>; // Attach onClick handler to button
}