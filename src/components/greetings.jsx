import './greetings.css';
import React from "react";

function Greetings (props){
const {id,name} = props;


    return(
    <p id={id} className={`greetings hello-world-${name === 'Ania' ? 'Me' : 'unknown'}`}>
        Hello world, {name} {name === 'Ania' ? 'Mucha' : 'Unknown'}!
    </p>
    );
};


export default Greetings;


// function getSurname(name){
//     let surname = 'Unknown';
  
//     if (name === 'Ania') {
//       surname = 'Mucha';
//     } 
//     return surname;
//   }
  
//   function getClassNameSuff(name){
//     let classNameSuff = 'unknown';
  
//     if (name === 'Ania') {
//       classNameSuff = 'Me';
//     } 
//     return classNameSuff;
//   }





// const getClassSuff= () =>{
//     const classSuff = name === 'Ania' ? 'Me' : 'unknown';
//     if(classSuff==='Me');
//     return classSuff;
// }