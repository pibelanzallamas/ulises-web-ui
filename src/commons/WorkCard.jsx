import React from "react";
import leftIcon from "../assets/left-icon.svg";
import rightIcon from "../assets/right-icon.png";
import youtubeIcon from "../assets/youtube-icon.svg";

function WorkCard({ work }) {
  return (
    <div className="works" style={{ padding: "0rem" }}>
      <div className="work-images">
        {/* <img src={leftIcon} alt="left-logo-icon" className="work-image-arrows" /> */}
        <img
          src={work.image}
          alt="DreamerPaintings Home Page"
          className="work-image"
        />
        {/* <img src={rightIcon} alt="left-logo-icon" className="work-image-arrows" /> */}
      </div>
      <div className="work-info">
        <h3>{work.title}</h3>
        <p>{work.desc}</p>
        <date> {work.date}</date>
        <a href={work.link} className="links">
          Link
        </a>

        <span className="work-youtube-link">
          <a href={work.youtube} className="links">
            YouTube
          </a>
          <img src={youtubeIcon} alt="youtube-logo-icon" />
        </span>
      </div>
    </div>
  );
}

export default WorkCard;
