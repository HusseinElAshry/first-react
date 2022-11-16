import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Start from './Start';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routers = createBrowserRouter([{path:'/' ,element : <App/> ,errorElement : <h3>NOT Found</h3> ,children:[
  {path:'Portfolio' , element :<Portfolio/> },
  {path:'About' , element :<About/> },
  {path:'Contact' , element :<Contact/> },
  {path : "Start", element: <Start/>}
]}])
root.render(
    <RouterProvider router={routers}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
