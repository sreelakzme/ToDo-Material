import React, {useState} from 'react';
//import Clock from 'react-digital-clock';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const ToDoList = () =>{
    const [item, setItem] = useState("");
   const [newitem, setNewItem] = useState([]);

   
   
    const itemEvent = (event) =>{
       setItem(event.target.value)

    }
    const listOfItems =() =>{
        setNewItem((prevValue)=>{
            return [...prevValue, item]

        });
        setItem(" ");
    }
    return(<> 
    <div className="main_div">
        <div className="center_div">
            <br></br>
                <h1>ToDo List</h1>
                <br></br>
                <input type="text" value= {item}
                placeholder="Add an item " 
                    onChange={itemEvent}
                />
                <Button className= "newBtn" onClick={listOfItems}>
                    <AddIcon/>
                </Button>
                <br/>
                <ol>
           {         
            newitem.map((val,index) => {
                return <List key={index} text={val}/>;

            })}
                </ol>
             
        </div>
    </div>
    
    </>);
};

export default ToDoList;
