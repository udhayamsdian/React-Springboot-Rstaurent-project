import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPage from './FormPage.jsx';
// import Style from './Stle.css';
import Homepage from './Homepage.jsx';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import AddProducts from './AddProducts.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Homepage />
  //   {/* <FormPage /> */}
  // </React.StrictMode>,
  <BrowserRouter>
  {/* <LandingPage /> */}
  {/* <AddProducts /> */}
  <Homepage />
  </BrowserRouter>
)
