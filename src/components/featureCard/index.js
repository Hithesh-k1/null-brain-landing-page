import React from "react";
import { featureCardData } from "../../constants";

export default function FeatureCard() {
  return (
    <div className="d-flex flex-wrap justify-content-center m-4">
      <div>
        <h3 className="text-center">Our Features</h3>
        <p className="text-muted text-center"> Checkout our list of awesome features below</p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {featureCardData.map(({ title, description, icon }) => {
          return (
            <>
              <div
                className=" card bg-light border-light shadow-sm rounded m-3 p-1 d-flex flex-column align-items-center"
                style={{ width: "20rem" }}
              >
                <i className={icon} style={{ fontSize: "2rem", color: "#007FFF" }} />
                <div class="card-body  d-flex flex-column align-items-center ">
                  <p>{title}</p>
                  <p className="text-muted text-center">{description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
