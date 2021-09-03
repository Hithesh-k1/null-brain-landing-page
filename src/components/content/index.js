import React from "react";
import "./index.scss";
import AUTOMATE from "../../assests/images/automate.svg";
import PRODUCTIVE from "../../assests/images/productive.svg";

export default function Content() {
  const contentData = [
    {
      title: "Boost Productivity",
      flexType: "flex-row",
      description:
        "Build an atmosphere that creates productivity in your organization and your company culture.",
      imgUrl: PRODUCTIVE,
      content: [
        { data: "Maximize productivity and growth" },
        { data: "Speed past your competition" },
        { data: "Learn the top techniques" },
      ],
    },
    {
      title: "Automated Task",
      flexType: "flex-row-reverse",
      description:
        "Save time and money with our revolutionary services. We are the leades in the industry.",
      imgUrl: AUTOMATE,
      content: [
        { data: "Automate task management workflow" },
        { data: "Detailed analytics for ypur data" },
        { data: "Some awesome integrations" },
      ],
    },
  ];

  const RenderList = ({ content }) => {
    return content?.map(({ data }) => {
      return (
        <li>
          <span>
            <i class="bi bi-patch-check-fill text-warning"></i>
          </span>
          <p className="text-muted">{data}</p>
        </li>
      );
    });
  };

  return (
    <div className="container m-4">
      {contentData.map(({ title, description, imgUrl, content, flexType }) => {
        return (
          <div
            className={`d-flex flex-row flex-wrap justify-content-lg-around justify-content-sm-center ${flexType} m-4`}
          >
            <div className="square m-4">
              <img alt={title} src={imgUrl} />
            </div>
            <div className="d-flex flex-column align-items-start m-4">
              <h4>{title}</h4>
              <p className="text-wrap text-muted" style={{ width: "20rem" }}>
                {description}
              </p>
              <ul>
                <RenderList content={content} />
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
