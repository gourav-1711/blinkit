import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Search.jsx';
import Product from './Product.jsx';
import ItemList from './ItemList.jsx';
import PageNotFound from './PageNotFound.jsx';
import Cart from './Cart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/s/' element={<Search />} ></Route>
        <Route path='/product/:category/:id' element={<Product />} ></Route>
        <Route path='/item/' element={<ItemList />}></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='*' element={<PageNotFound />} ></Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
