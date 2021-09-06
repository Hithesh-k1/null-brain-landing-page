import React from "react";
import { teamsData } from "../../constants";
import "./index.scss";
export default function Teams() {
  return (
    <div>
      <div>
        <p className="text-justify font-weight-light">OUR TEAM</p>
        <h2>An Incredible team of amazing individuals</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {teamsData.map(({ avatarUrl, placeholder, name, role, githubUrl, twitterUrl }) => {
          return (
            <div style={{ margin: "5% 4%" }} className="d-flex flex-column align-items-center">
              <div
                style={{
                  backgroundColor: "#B1D8B7",
                  padding: "10%",
                  borderRadius: "50% 0px 50% 50%",
                }}
              >
                <img
                  key={placeholder}
                  className="circular_image"
                  src={avatarUrl}
                  alt={placeholder}
                />
              </div>
              <div className="m-2 text-center">
                <>{name}</>
                <p className="text-primary font-weight-light">{role}</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <a href={githubUrl}>
                  <i class="bi bi-github text-muted p-2" />
                </a>
                <a href={twitterUrl}>
                  <i class="bi bi-twitter  text-muted p-2" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
