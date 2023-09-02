import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import logo from '../assets/logo.png'



import "bootstrap/dist/css/bootstrap.min.css";

import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Navbar = (props) => {
  const {id} =useParams();
  const cart = useSelector((state) => state.cartProducts.cart);
  const[avatar,setAvatar]=useState('')
  
  useEffect(()=>{
    const getProfile=async()=>{
    const docRef = doc(db, "users", id);
const docSnap = await getDoc(docRef);
setAvatar(docSnap.data().uploadProfile);
    }
    getProfile();
  },[]);
  console.log(avatar)
  return (
    <header className="p-3" style={{ background: 'linear-gradient(to right, red, orange)' }}>
      <div className="container">
     
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="" className="d-flex align-items-center  mb-2 mb-lg-0 text-white text-decoration-none"> <img
            src={logo}  
            alt="Logo"
            height="80"
          />
          </Link>
          <h4 className="mx-3" style={{ color: 'white', fontSize: '24px',fontFamily:' cursive' ,cursor:'pointer'}}>Yes Shopping</h4>

           
          
          
          

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            
          </ul>

          <div>
            
          
            {props.state ?
             
             (
                
                <>
                
                  <div className="w-100 d-flex justify-content-between text-end">
                 
                    <Link className="nav-link" to="/cart"><button type="button" className="btn btn-outline-light me-2"><i className="fa-solid fa-cart-shopping"></i> Cart {cart.length}</button></Link>
                    
                  </div>
                  
                </>
              )
              : (
                  <>
                  
                    
                    
                    <div className="d-flex text-end">
                    
                    
                    
                    <Link className="nav-link" to={`/profile/${id}`}><button type="button" className="btn btn-outline-light me-2"> {avatar ?<img src={avatar} alt="avatar" height={'25px'} width='25px' className='me-2' style={{borderRadius:'50%'}}/>:null}Profile</button></Link>
                      <Link className="nav-link" to="/cart"><button type="button" className="btn btn-outline-light me-2"><i className="fa-solid fa-cart-shopping"></i> Cart {cart.length}</button></Link>
                      <Link className="nav-link" to="/"><button type="button" className="btn btn-outline-light me-2">Logout</button></Link>
                      
                    </div>
                  </>
                  
              )
              
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar