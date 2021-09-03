import React from "react";
import { companiesLogoUrlData } from "../../constants";
import "./index.scss";
export default function Companies() {
  return (
    <div className="d-flex flex-column justify-content-center m-4">
      <h6 className="text-center font-weight-bold">TRUSTED BY TOP-LEADING COMPANIES</h6>
      <div className="d-flex flex-row justify-content-center">
        {companiesLogoUrlData.map(({ url, placeholder }) => {
          return (
            <div className="landscape">
              <img key={placeholder} src={url} alt={placeholder} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
