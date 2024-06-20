import React from 'react'
import Navbar from './Navpage'
import {Routes,Route} from 'react-router-dom'
import FormPage from './FormPage'
import Homepage1 from './Homepage1'
import Products from './Products'
import Footer from './Footer'
import Contact from './Contact'
import Review from './Review'
import About from './About'
import Product1 from './Product1'

function Homepage() {
  return (
    <>
    <Navbar />
    <Routes>
        
        {/* <Route  path="/" element={<Route1 />}></Route>
        <Route  path="/Route2" element={<Route2 />}></Route> */}
        <Route  path="/" element={<Homepage1 />}></Route>
        <Route path="/FormPage" element={<FormPage/>}></Route>
        <Route path="/Product2" element={<Products/>}></Route>
        <Route path="/Products" element={<Product1/>}></Route>
        <Route path="/Contacts" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Review" element={<Review />}></Route>
    
     </Routes>
     <Footer></Footer>
    
    </>
  )
}

export default Homepage