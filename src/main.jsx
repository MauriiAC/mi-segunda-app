import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Products } from './products/Products.jsx'
import './index.css'
import { ProductDetail } from './products/ProductDetail.jsx'
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { UserProvider } from "./context/UserProvider.jsx"
import { Tateti } from "./tateti/Tateti.jsx"
import { NewProduct } from "./products/NewProduct.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<App msg={"Ruta raiz"}/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/newProduct' element={<NewProduct />} />
          <Route path='/tateti' element={<Tateti />} />
          <Route path='/*' element={<App msg={"Ruta por defecto"}/>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
