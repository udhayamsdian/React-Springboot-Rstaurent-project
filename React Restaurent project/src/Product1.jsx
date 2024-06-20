import React from "react";
import PickMeals from "../src/assets/pick-meals-image.png";
import ChooseMeals from "../src/assets/choose-image.png";
import DeliveryMeals from "../src/assets/delivery-image.png";
import { Link } from "react-router-dom";
// import AddProducts from "./AddProducts";


const Product1 = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <>
    {/* <div>
    <AddProducts />
    </div> */}
    
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Product & Services</p>
        <h1 className="primary-heading">Let Click & Check</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <Link to="/Product2" style={{textDecorationLine:'none',color:'white'}}>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      </Link>
    </div>
    </>
  );
};

export default Product1;