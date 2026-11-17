import React from "react";

const ServiceCard = ({ title, description, price, icon }) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {price && <span className="service-price">{price}</span>}
    </div>
  );
};

export default ServiceCard;