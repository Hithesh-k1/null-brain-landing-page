import React from "react";
import "./index.scss";

export default function PurchaseNow() {
  return (
    <div className="d-flex flex-column  align-items-center">
      <div className="m-4 ">
      <h1 className="text-center font-weight-bolder m-2">Stop Crafting Your</h1>
      <h1 className="text-center" style={{color:'#5568E5'}}> Next Great Idea</h1>
      </div>
      <p className="text-center">Simplifiying Creation of landing page, blog pages, application pages and so much more</p>
      <div className='m-4 d-flex flex-column  align-items-center'>
      <button className="btn btn-default text-decoration-none active m-2">{"Purchase Now"}</button>
      <a href='/#' className="text-decoration-none">Learn More</a>
      </div>
    </div>
  );
}
