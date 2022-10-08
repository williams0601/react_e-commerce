import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';



import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4-dXt3Qn5GNldD4f2bmb5CSrhPv2VgJ0",
  authDomain: "reacte-commerce-fd9b7.firebaseapp.com",
  projectId: "reacte-commerce-fd9b7",
  storageBucket: "reacte-commerce-fd9b7.appspot.com",
  messagingSenderId: "1003149735801",
  appId: "1:1003149735801:web:0ff6a3e0519df6d4ab21a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
