import React from 'react';
import ReactDOM from 'react-dom/client';


function App(){
  const [item, setItems] = useState([]);
  const [name,setName] =useState('')
  const[description,setDescription]=useState('')

  const AddItemButton =()=>{
    if(!name.trim() || !description.trim())
    return;
    const newItem ={
      id: Date.now(),
      name:name,
      description:description
    };
    setItems([...item,newItem])
    setName('');
    setDescription('');
  };
  const deleteItemButton= id=>{
    setItems(items.filter(item=>item.id !==id));

  };
  return(
    <div>
      <h1> Item List </h1>
      <input>
          type="text"
          placeholder="Name"
          value={name}
          onChange={e=>setName(e.target.value)}
      </input>
      <input>
          type="text"
          placeholder="Description"
          value={description}
          onChange={e=>setName(e.target.value)}
      </input>
    </div>
  )

}








const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    // <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

