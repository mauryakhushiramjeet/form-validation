import React from 'react'
import "./style.css"
import { useState } from 'react'
const Form = () => {
    const[email,setEmail]=useState("")
    const[username,setusername]=useState("")
    const[pasword,setpasword]=useState("")
    const[confirmpasword,setconfirmpasword]=useState("")

    const[ErrorEmail,setErrorEmail]=useState("")
    const[ErrorUsername,setErrorUsername]=useState("")
    const[Errorpasword,setErrorpasword]=useState("")
    const[Errorconfirmpasword,setErrorconfirmpasword]=useState("")

    const[emailcolor,setemailcolor]=useState("")
    const[usercolor,setusercolor]=useState("")
    const[pasworccolor,setpaswordcolor]=useState("")
    const[confirmpaswordcolor,setconfirmpaswordcolor]=useState("")


const valide=(e)=>{
  e.preventDefault()
if(username.length>8 && username !==""){
  setErrorUsername("")
  setusercolor("green")
}else{
  setErrorUsername("usename must be 8 latter long")
  setusercolor("red")
}
if(email.includes("@gmail.com")&& email !==""){
  setErrorEmail("")
  setemailcolor("green")
}
else{
  setErrorEmail("email must be include  @gmail.com  with email")
  setemailcolor("red")
}
if(pasword.length>8 ){
  setErrorpasword("")
  setpaswordcolor("green")
}
else{
  setErrorpasword("Pasword should be 8 latter")
  setpaswordcolor("red")
}
if(confirmpasword===pasword&& pasword !==""){
  setErrorconfirmpasword("")
  setconfirmpaswordcolor("green")
}
else{
  setErrorconfirmpasword("pasword did't matched ")
  setconfirmpaswordcolor("green")
}
// setEmail("")
// setconfirmpasword("")
// setusername("")
// setpasword("")
}
  return (
  <>
  
  <div className="card">
        <div className="card-image"></div>

   
    <form>
        <input
  type='text' value={username} placeholder='Name' style={{borderColor:usercolor}} onChange={((e)=>setusername(e.target.value))}></input>
        <p className="error">{ErrorUsername}</p>

        <input
 type='text' value={email} placeholder='Email' style={{borderColor:emailcolor}} onChange={((e)=>setEmail(e.target.value))}></input>
        <p className="error">{ErrorEmail}</p>

        <input
 type='password' value={pasword} placeholder='Pasword' style={{borderColor:pasworccolor}} onChange={((e)=>setpasword(e.target.value))}></input>
        <p className="error">{Errorpasword}</p>

        <input
  type="password" value={confirmpasword} placeholder='confirmpasword' style={{borderColor:confirmpaswordcolor}} onChange={((e)=>setconfirmpasword(e.target.value))}></input>
        <p className="error">{Errorconfirmpasword}</p>
        <button onClick={valide} >submit</button>
    </form>
    </div>
  </>
  )
}

export default Form
