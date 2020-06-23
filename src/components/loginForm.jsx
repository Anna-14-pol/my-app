import './loginForm.css';
import React, {useState} from 'react';

const LoginForm = ()=>{

    const[email, setEmail]= useState('');
    const setEmailValue = (e)=> setEmail(e.target.value);

    const[password, setPassword]= useState('');
    const setPasswordValue = (e)=> setPassword(e.target.value);

    const [isLoggedIn, setIsLoggedIn]= useState(false);

    const onButtClick = (e)=>{
        e.preventDefault();    
        console.log(email, password);
        fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({email,password}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((json) => {
      if(json.id){
          setIsLoggedIn(true);
      }
    });
    };
    return(
        <form id='login-form'>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' onChange={setEmailValue}/>  
            </div>
            <div>
                <label htmlFor='password'>Hasło</label>
                <input type='password' id='password' onChange={setPasswordValue}/>  
                </div>
                {isLoggedIn?(
                    <p style={{color:'green'}}>Zalogowane</p>
                ):null}
            <button type='submit' onClick={onButtClick}>Wyślij</button>
        </form>
    );
};

export default LoginForm;