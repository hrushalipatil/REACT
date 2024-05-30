import { useState } from "react";

// // function App() {

// //   const [Items, setItems] = useState([])
// //   const [newItemName, setNewItemName] = useState('')
// //   const [newItemDescription, setNewItemDescription] = useState('')

// //   const addItem = () => {
// //     if (newItemName.trim() === '' || newItemDescription.trim() === '') {
// //       alert('Please enter both name and description for the item.');
// //       return;
// //     }
// //     const newItem = {
// //       id: Math.random().toString(),
// //       Name: newItemName,
// //       description: newItemDescription
// //     };
// //     // destructor
// //     setItems([...Items, newItem]);
// //     setNewItemName('')
// //     setNewItemDescription('')

// //     const deleteItem = () => {
// //       const updateItems = items.filter(item => item.id !== id);
// //       setItems(updateItems);

// //     }
// //   }
// //   return (
// //     <div className="App">
// //       <h1>Item List</h1>
// //       <div>
// //         <label>Name : </label>
// //         <input>
// //           type="text"
// //           id="name"
// //           value={ItemName}
// //           onChange={(event) => setNewName(event.target.value)}
// //         </input>
// //       </div>
// //       <div>
// //         <label>Description : </label>
// //         <input>
// //           type="text"
// //           id="name"
// //           value={ItemDescription}
// //           onChange={(event) => setNewDescription(event.target.value)}
// //         </input>
// //       </div>
// //       <button onClick={addItem}>ADD</button>
// //       <ol>
// //         {items.map(item => (
// //           <li key={item.id}>
// //             <strong>{item.name}</strong> - {item.description} 
// //             <button onClick={() => deleteItem(item.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ol>

// //     </div>
// //   )


// // }
// import React, { useState } from 'react';

// function App() {
//   const [items, setItems] = useState([]);
//   const [newItemName, setNewItemName] = useState('');
//   const [newItemDescription, setNewItemDescription] = useState('');

//   const addItem = () => {
//     if (newItemName.trim() === '' || newItemDescription.trim() === '') {
//       alert('Please enter both name and description for the item.');
//       return;
//     }
//     const newItem = {
//       id: Math.random().toString(36),
//       name: newItemName,
//       description: newItemDescription
//     };
//     setItems([...items ,newItem]);
//     setNewItemName('');
//     setNewItemDescription('');
//     console.log(newItem);
//   };

//   const deleteItem = (id) => {
//     const updatedItems = items.filter(item => item.id !== id);
//     setItems(updatedItems);
//     console.log("Deleted Item with ID ", id);
//   };

//   return (
//     <div className="App">
//       <h1>Item List</h1>
//       <div>
//         <label>Name:</label>
//         <input 
//           type="text" 
//           id="name" 
//           value={newItemName} 
//           onChange={(event) => setNewItemName(event.target.value)} 
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input type="text" id="description" 
//           value={newItemDescription} 
//           onChange={(event) => setNewItemDescription(event.target.value)} 
//         />
//       </div>
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             <strong>{item.name}</strong> - {item.description} 
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
];

export default function App() {
  //const step = 1;
  const [step,setState]= useState(1)

  function handlePrevious(){
    if(step > 1){
      setState(step-1)
    }
  }

  function handleNext(){
    if(step < 3){
      setState(step+1)
    }
  }

  // JSX
  return (

    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active":""}`}>1</div>
        <div className={`${step >= 2 ? "active":""}`}>2</div>
        <div className={`${step >= 3 ? "active":""}`}>3</div>
      </div>

      <p className="message">{step}:{messages[step-1]}</p>

      <div className="buttons">
        <button  onClick ={handlePrevious}style={{ background: "#7950f2", color: "#fff" }}>Previous</button>
        <button  onClick ={handleNext}style={{ background: "#7950f2", color: "#fff" }}>Next</button>
      </div>
    </div>

  );

}