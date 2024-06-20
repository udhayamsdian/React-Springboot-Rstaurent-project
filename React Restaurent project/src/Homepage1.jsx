import React from 'react'
 import SwLogo from '../src/assets/bg-remover1.png'
import img from '../src/assets/home-banner-background.png'
import { FiArrowRight } from "react-icons/fi";


function Homepage1() {
    const Bg={

    }
  return (
    <>
    
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={img} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
            
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            OrderNow <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={SwLogo} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage1