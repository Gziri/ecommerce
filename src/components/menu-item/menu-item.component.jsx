import React from "react";
import "./menu-item.styles.scss";
import { useNavigate, useLocation, useMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch(location.pathname);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${match.pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;