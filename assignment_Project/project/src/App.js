import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   const increaseCount = () => setCount((count) => count + step);
//   const decreaseCount = () => setCount((count) => count - step);
//   const increaseStep = () => setStep((count) => count + 1);
//   const decreaseStep = () => setStep((count) => count - 1);

 

//   return (
//     <div>
//       <div>
//         <button onClick={decreaseStep}>-</button>
//         <span>Step: {step}</span>
//         <button onClick={increaseStep}>+</button>
//       </div>

//       <div>
//         <button onClick={decreaseCount}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={increaseCount}>+</button>
//       </div>
//       <p>
//         <span>
//           {count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }

function Counter() {

  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  let increaseCount = () => (setCount((count) => count + step))
  let decreaseCount = () => (setCount((count) => count - step))

  let increaseStep = () => (setStep((step) => step + 1))
  let decreaseStep = () => (setStep((step) => step - 1))

  const date = new Date()
  date.setDate(date.getDate()+count)
 
 

  return (
    <div>
      <div>

        <button onClick={decreaseCount}>-</button>
        <h1>Counter:{count}</h1>
        <button onClickCapture={increaseCount}>+</button>
      </div>
      <div>
        <button onClick={decreaseStep}>-</button>
        <h1>Steps:{step}</h1>
        <button onClickCapture={increaseStep}>+</button>
        <p>{date.toDateString()}</p>
      </div>
    </div>

  )

}

export default App;
