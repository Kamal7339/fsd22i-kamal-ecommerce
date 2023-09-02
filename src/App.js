
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { HashRouter as Router, Routes, Route, Switch} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Welcome from "./components/Welcome";
import User from "./components/User";
import toast, { Toaster } from 'react-hot-toast';
import './components/style.css';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  
  return (
    <div className="App">

      <Router>
       
      <Toaster />
    
       
        <Routes>
          
          <Route exact path="/Home/:id" element={<ProductList/>} />
          
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/product/:productId" element={<ProductDetails/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/profile/:id" element={<User/>} />
          <Route exact path="/Login" element={<Login changeState={setLoggedIn}/>} />
          <Route exact path="/SignUp" element={<SignUp/>} />
          
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;