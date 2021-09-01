import './App.css';
import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup,Button} from 'react-bootstrap';

function App() {

  const[InputList, setInputList]=useState("");
  const[Item, setItem]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  };

  const ListItem =()=>{
    setItem((oldI)=>{
      return [...oldI, InputList];

    });
  };
  return (
    <div className="App">
      <br/>
      <h1>TODO App </h1>
      <br/>
      <input  type="text" placeholder="Add Items" onChange={itemEvent} ></input>
      <Button variant="info" onClick={ListItem}> Add </Button>
      

      <ol>
        
        {Item.map((items)=>{
        return <ListGroup variant="success">{items}</ListGroup>;
        
         } )}
      </ol>

    </div>
  );
}

export default App;
