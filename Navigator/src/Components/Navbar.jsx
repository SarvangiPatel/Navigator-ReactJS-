

import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineLogin } from "react-icons/md";
import { AuthContext } from './AuthContext';


const Navbar = () => {

 const {token,handleLogin} = useContext(AuthContext)

const navigate = useNavigate()

function handleLogout(){
  handleLogin(null)
  localStorage.removeItem('token')
  navigate("/Login")
}

  return (

    <>

    <div className="navbar d-flex justify-content-around align-items-center text-dark">
        <div className="logo">
          <h1>Logo..</h1>
        </div>
        <div className="menu">
            <ul style={{listStyle:"none"}} className='mb-0 d-flex'>
                <li className='ps-3'><Link to="/" className='text-dark text-decoration-none'>Home</Link></li>

                <li className='ps-3'><Link to="/about" className='text-dark text-decoration-none'>About</Link></li>

                <li className='ps-3'><Link to = "/Product" className='text-dark text-decoration-none'>Product</Link></li>

                <li className='ps-3'><Link to = "/Login" className='text-dark text-decoration-none'><MdOutlineLogin  style={{fontSize:"20px"}} />  Login</Link></li>

                <button onClick={handleLogout} style={{marginLeft:"10px",border:"none",backgroundColor:"#f0f2f5"}}>Log Out</button>
               
            </ul>
        </div>
    </div>
    
    </>
   
  )
}

export default Navbar