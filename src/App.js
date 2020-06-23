import React, {useState} from 'react';
import './App.css';
import Greetings from './components/greetings';
import Section from './components/section';
import LoginForm from './components/loginForm';
import LoremIpsumLIst from './components/loremIpsumList';
import LoginFormClass from './components/loginFormClassComp';


function App() {
  const [name,setName] = useState('Ania');
  const toggleName = () => setName(name==='Ania' ? 'blabla' : 'Ania');

  const [inputState, setInputState] = useState('');
  const setInputStateValue = (e)=> setInputState(e.target.value);

  // const listContent = listTexts.map((text,idx)=> (<li key= {`${text}-${idx}`}>{text}</li>));

  return (
    <div id="app-container">
      <Section headerText='Switch your name'>
        <Greetings id='greetings-toggle' name={name} />
        <button onClick={toggleName}>Switch name</button>
      </Section>
      
      <Section headerText='Type your name'>
        <Greetings id='greetings-from-input' name={inputState} />
        <input onChange={setInputStateValue} />
      </Section>

      <Section headerText='Login form Class Comp'>
       <LoginFormClass /> 
      </Section>

      <Section headerText='Login form'>
        <LoginForm/>
      </Section>

      <Section headerText='List'>
        <LoremIpsumLIst />
      </Section>
    </div>
  );
}

export default App;


{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
      Learn React
      </a>
  </header> 
</div> */}