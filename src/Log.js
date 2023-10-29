import React, { useState } from "react";
import './Log.css';
const LoginForm = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[store, setStore] = useState([])
  
    const Submitform = (event) => {
        event.preventDefault();
       
    }

    const result = () => {
        const newentry = {email:email, password:password};
        setStore([...store, newentry])
       
    }

    return <>
    <div id="demo">    
    <h3>Login Form</h3>   
    <form onSubmit={Submitform}>

          <div>  
              <label htmlFor="email"> Email </label>
              <input type="Email" placeholder="Enter Email" name="email" autoComplete="0ff" 
                 value={email}
                    onChange={e=>setEmail(e.target.value)}/> 
                        <br/> <br/>
        </div>

        <div>  
              <label htmlFor="password">password  </label>
              <input type="password" placeholder="Enter password" name="password" autoComplete="0ff"  value={password}
                 onChange={e=>setPassword(e.target.value)}/> 
                       <br/> <br/>
        </div>
             
        <button type="button" onClick={result}>Login</button>
    </form>
</div>
        <div>
        {   
            store.map((curritem)=>{
                return <div id="divv"> 
                <span> {curritem.email}  </span> 
                <span> {curritem.password}  </span>
                </div>

            })
        }
        </div>
       
    </>
}

export default LoginForm;