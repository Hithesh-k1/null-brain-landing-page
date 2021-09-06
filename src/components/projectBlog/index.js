import React from "react";
import { projectBlogData } from "../../constants";

export default function ProjectBlog() {
  return (
    <div>
      <div className='m-2'>
        <h2 className="text-justify">The Project Blog</h2>
        <p className="text-muted">Degsins and layouts to help you with your app.</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {projectBlogData.map(({ url, description }) => {
          return (
            <>
              <div class="card m-4" style={{ width: "16rem" }}>
                <img src={url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">{description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
