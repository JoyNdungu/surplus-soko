import React from 'react'
import './styles/Landing.css'
import img1 from './assets/farmer.jpeg'
import img2 from './assets/market.jpg'
import img3 from './assets/smsalert.jpeg'
import img4 from './assets/logoheader.png'
import img5 from './assets/farmers.jpg'
import {useNavigate, Link} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/Signup')
  }
  return (
    
      <div className="page">
      <div className="header">
        <div className="logo-container">
        <img className="logo" src={img4}/>
        </div>
        <div className="header-text">  
          <p>Connecting farmers one sms at a time</p>
        </div>
     <div className="nav">
     <p>Home</p> 
       <p>How It Works</p>
       <p>Insights</p>
       <p>Contacts</p>
       <button>Login</button>
     </div>
     
      </div>
      
        <div className="upper">
         
          <div className="pics">

            <div className="pic">
              
            <img src={img1}/>
            
            </div>

            <div className="pic">
              
            <img src={img2}/>
            </div>

            <div className="pic">
             
            <img src={img3}/>
            </div>
          </div>

        </div>
        <div className="lower">
          <div className="lower-pic">
            <img src={img5}/>
            
          </div>
          <div className="lower-text">
            <h1>Welcome to Surplus Soko</h1>
            <p>We are a platform that connects farmers to buyers through SMS alerts.</p>
            <p>Our mission is to help farmers sell their surplus produce quickly and easily.</p>
            <p>Expand your reach and connect with more buyers using your basic mobine phone. Get paid instantly through M-Pesa</p>
            

            <button onClick={handleLogin}>Login</button>
          <p className="Signup">Don't have an Account?<Link to="/Signup">Signup</Link></p>
          </div>
        </div>
      </div>
 
  )
}

export default Landing
