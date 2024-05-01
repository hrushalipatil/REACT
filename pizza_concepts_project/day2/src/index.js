import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import '../index.css';


function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

// class based component:

// class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   };
//   render() {
//     return (
//       <div>
//          <h3>{this.state.count}</h3>

//         < button  onClick={this.increment}> increment </button>

//         <button onClick={this.decrement}> decrement </button>
//       </div>
//     )
//   }
// }

// functional components:



function Counter() {

  //We're creating a variable called count that will keep track of a number. Initially, it's set to 0.   

  const [count, setcount] = useState(0)
  const increment = () => {
    setcount(count + 1)
    console.log(count)
  }
  const decrement = () => {
    setcount(count-1)
    console.log(count)
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
)
}










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


