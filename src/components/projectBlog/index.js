import React from "react";
import { projectBlogData } from "../../constants";

export default function ProjectBlog() {


  return (
    <div className="d-flex flex-wrap justify-content-center">
      {projectBlogData.map(({ url, description }) => {
        return (
          <>
          <div class="card m-5" style={{ width: "16rem"}}>
            <img src={url} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">{description}</p>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
}
