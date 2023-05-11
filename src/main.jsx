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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeARFvp_I0e7Oy6YgXz5IbCyBMA-VEizw",
  authDomain: "mi-segunda-app-17d57.firebaseapp.com",
  projectId: "mi-segunda-app-17d57",
  storageBucket: "mi-segunda-app-17d57.appspot.com",
  messagingSenderId: "967008598112",
  appId: "1:967008598112:web:95c61eb8ccccfdde6beb05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<App msg={"Ruta raiz"}/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/tateti' element={<Tateti />} />
          <Route path='/*' element={<App msg={"Ruta por defecto"}/>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
