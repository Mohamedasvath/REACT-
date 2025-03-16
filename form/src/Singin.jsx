import React, { useState } from 'react'
import './App.css'

const Singin = () => {
    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
    const[email,setemail] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        alert(`username : ${username}  password: ${password} Email: ${email}`)
        if( username =="" || password == "" ){
            alert("enter your name ")
            
        }
        else{
            alert("plese enter password")
        
    }}
       
    


  return (
   <div>
    <div className="container">
        
        <div >
   
    </div>

    <form className='card' onSubmit={handlesubmit}>

       <h1 className='header'>login </h1>
        <div className="inputs">
      <label className='label-box'>Username:</label> <br/>
    <input type='text'
     value={username} onChange={(e)=>setusername(e.target.value)} placeholder='enter your name'/> <br/>
     <label  className='label-box'>Password:</label> <br/>
    <input type='password'

     value={password}  onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password'/> <br/>
      

    <label  className='label-box'>Email:</label> <br/>
    <input type='email' required

      value={email}  onChange={(e)=>setemail(e.target.value)} placeholder='enter your email' />
      <p className='link'> <a href='/'> Forgot password?</a></p>
    </div>
     
     <div className="button-container">
    
     <button>
    Submit
    <i class="fa-solid fa-check"></i>
  </button>

    </div>
    <span class="top"></span>
  <span class="right"></span>
  <span class="bottom"></span>
  <span class="left"></span>

    </form>
    
    </div>
   
   </div>

  )
}

export default Singin              
