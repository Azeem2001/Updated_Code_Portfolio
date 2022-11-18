import React from "react";
import styled from "./ServiceCard.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ServiceCard = ({ heading, skill }) => {
  return (
    
      <div className={styled.ServiceCard}>
        <div className={styled.text}>
          <h4>{heading}</h4>
        </div>
        <div className={styled.content}>
          <p>
            <KeyboardDoubleArrowRightIcon />
            <strong>{skill}</strong>
          </p>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            exercitationem.
          </h5>
        </div>
      </div>

  );
};

export default ServiceCard;
