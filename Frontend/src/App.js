import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './page/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './page/ProductDetail';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './page/Cart';
function App() {
  const[cartItems,setCartItem]=useState([]);
  return (
    <div className="App">
      <ToastContainer position="top-center" theme="dark"/>
        <Router>
         <Header cartItems ={cartItems}/>
          <Routes>
              <Route path="/" element={ <Home/>} />         
              <Route path="/search" element={ <Home/>} />     
              <Route path='/product/:id'element={<ProductDetail cartItems={cartItems} setCartItem={setCartItem}/>}/> 
              <Route path='/cart' element={<Cart cartItems={cartItems} setCartItem={setCartItem} />}/>      
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
