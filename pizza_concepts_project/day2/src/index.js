import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';


function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  };
  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
        < button onClick={this.increment}> increment </button>

        <button onClick={this.decrement}> decrement </button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


