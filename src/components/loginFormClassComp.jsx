import React from 'react';


class LoginFormClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            results:[],
        };
        this.setEmailValue = this.setEmailValue.bind(this);
        this.setPasswordValue = this.setPasswordValue.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
    
    this.onScroll =() => console.log('scroll');
    }
    componentDidMount(){
        console.log('did mount');


    //     fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then((results) => this.setState({results}))
    // window.addEventListener('scroll', this.onScroll);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(!prevState.results && this.state.results){
            console.log('mamy resultsy')
        }
    }

    // componentWillUnmount(){
    //     console.log('unmount');
    //     window.removeEventListener('scroll', this.onScroll);
    // }

    setEmailValue(e){
        this.setState({email: e.target.value})
    }

    setPasswordValue(e){
        this.setState({password: e.target.value})
    }
    setIsLoggedIn(){
        this.setState({isLoggedIn: true})
    }

    onButtonClick(e){
        e.preventDefault();
        console.log(this.state);
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({email:e.target.value,password:e.target.value}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((json) => {
      if(json.id){
        this.setIsLoggedIn(true);
      }
    });
    };
    

    render(){
        console.log('render',this.state);
        return(
        <form id='login-form-class-comp'>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' onChange={this.setEmailValue}/>  
            </div>
            <div>
                <label htmlFor='password'>Hasło</label>
                <input type='password' id='password' onChange={this.setPasswordValue}/>  
            </div>
            {this.state.isLoggedIn?(
                    <p style={{color:'green'}}>Zalogowane</p>
                ):null}
              
            <button type='submit' onClick={this.onButtonClick}>Wyślij</button>
                </form>
            )
        }
        };

export default LoginFormClass;