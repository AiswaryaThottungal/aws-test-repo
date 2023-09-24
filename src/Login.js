import React ,{useState}from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Login = () => {    
    const LoginWrapper = styled.div`
        width: 100vw;   
        height: auto;    
        display: flex;    
        border: none;   
        margin-top: 5rem;
        margin-bottom: 5rem;
        padding: 2rem;
        align-items: center;
        justify-content: center;
    .login-form{
        padding: 20px;
        background-color: white;
        border-style: solid;
        border-color: #9DBEBB;
        margin-bottom: 5%;
        margin-top: 2%;
        box-shadow: 24;
        border-radius: 1em;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .action-container {
        display: flex;
        gap:5px;
        margin: 30px auto;
        align-items: center;
        justify-content: center;
    }
    .text{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 35px;
        font-weight: 500;
    }
    .input-container{
        display: flex;
        flex-direction: column;  
        
        .input{
            padding: 1rem;
            margin: 1rem;
            border-color: ${({ theme }) => theme.colors.secondary};
        }
    }
    .submit{
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 45px;
        background:#77ACA2;
        border-radius: 50px;
        font-size: 19px;
        font-weight: 500;
        cursor: pointer;
    }
    .gray{
        background:rgb(189, 184, 184);
        
    }
    `;
    const [action,setAction] = useState("Login");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const actualData ={
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        }
        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();
        }
        else{
            console.log("All fields are required");
        }       
    

    }
  return (
    <>  
        <LoginWrapper>
        <div className='login-container'>            
            <form className='login-form' id='login-form' autoComplete='off' onSubmit={handleSubmit}>
                
                <div className='action-container'>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login    </div>
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup    </div>
                </div> 
                <div className='text'>{action}</div>
                
                <div className='input-container'>  
                    {action==="Login"?<div></div> :<input className='input'  label='Name'  name='name' placeholder='Enter Name' fullWidth required></input> }
                                    
                    <input className='input' label='Email Id' name='email' placeholder='Enter email-id' type='email' fullWidth required></input>
                    <input className='input' label='Password' name='password' placeholder='Enter Password' type='password' fullWidth required></input>
                </div>                
                <Button type='submit'> Submit</Button>  
                
                              
            </form>
        </div>
        </LoginWrapper>
    
   
    </>
  )
}

export default Login;