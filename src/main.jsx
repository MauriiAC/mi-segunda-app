import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Products } from './products/Products.jsx'
import './index.css'
import { ProductDetail } from './products/ProductDetail.jsx'
import { NavBar } from "./components/NavBar/NavBar.jsx"
import { Tablero } from "./tateti/Tablero/Tablero.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App msg={"Ruta raiz"}/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/tateti' element={<Tablero />} />
        <Route path='/*' element={<App msg={"Ruta por defecto"}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
