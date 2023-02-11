import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import Cards from './components/card/Card'
import { db } from './Config';
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Product from './components/product/Product';
import Price from './components/price/Price';


function App() {
  const [value,setValue] = useState([])

  useEffect(() => {
    async function app() {
      const queryProduct = await getDocs(collection(db, "product"));
      console.log(queryProduct);
      const item = queryProduct.docs.map((queryProduct))
    }

    app()
  }, [])

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/home' element={<><Navbar /><Cards /></>} />
          <Route path='/product' element={<Product />} />
          <Route path='/price' element={<Price />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;