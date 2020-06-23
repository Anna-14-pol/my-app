import React, { useState, useEffect} from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import listTexts from '../data/list';

const LoremIpsumList = () =>{

const [todos,setTodos]= useState(null);  

useEffect(()=>{
    console.log('effect done')
},[todos]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((results) => setTodos(results))  
},[]);


if(!todos){
    return null;
}
  console.log(todos[0]);

    return(<ul>
        {todos.map((todo)=>(
          <LightSpeed key={todo.id} left>
            <li>{todo.title}</li>
          </ LightSpeed>
        ))}  
      </ul>
      );
};

export default LoremIpsumList;