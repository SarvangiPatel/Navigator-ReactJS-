import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  const [mail,setmail] = useState("")
  const [pass,setpass] = useState("")

  const navigate = useNavigate()
const {token, handleLogin} = useContext(AuthContext)

  function HandleSubmit(e){
    e.preventDefault()
    axios.post("https://reqres.in/api/login", { email: mail, password: pass })
    .then((res)=>{
      console.log(res.data.token)
      handleLogin(res.data.token)
      localStorage.setItem('token', res.data.token);
      navigate("/Product")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  

  if(token){
    return <Navigate to="/Product" />

 } return (

        <>

            <div className="login" style={{margin:"auto",marginTop:"30px",width:"400px",height:"400px"}}>
                <h3 className='ps-5 mt-5'>LOG IN</h3>
                <p className='ps-5'>Enter your email and Password</p>

                <form action="" style={{margin:"auto"}} onSubmit={(e)=>HandleSubmit(e)}  className='ps-5'>
                    <input type="email" value={mail}
                    onChange={(e)=>setmail(e.target.value)}
                    placeholder='Enter Your Email' /><br /><br />

                    <input type="password" value={pass}
                    onChange={(e)=>setpass(e.target.value)}
                    placeholder='Enter Your Password' /><br /><br />

                    <input type="submit" value="Login" className='cart-btn' />
                </form>


            </div>

        </>

    )
}

export default Login