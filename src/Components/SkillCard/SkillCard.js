import React from "react";
import styled from "./SkillCard.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ProgressBar from "../ProgressBar/ProgressBar";
import { style } from "@mui/system";

const SkillCard = ({
  heading,
  skill,
  skill1,
  skill2,
  skill3,
  persentage1,
  persentage2,
  persentage3,
  persentage,
}) => {
  return (
    <div className={styled.SkillCardContainer}>
      <div className={styled.text}>
        <h4>{heading}</h4>
      </div>
      <div className={styled.content}>
        <div className={styled.softSkill}>
          <p>
            <KeyboardDoubleArrowRightIcon />
            <strong>{skill}</strong>
          </p>
          <h5>{persentage}</h5>
        </div>
        <div className={styled.persentage}>
          <div className={styled.persentagewidth}>
            <ProgressBar auto={"85%"} />
          </div>
        </div>
        <div className={styled.softSkill}>
          <p>
            <KeyboardDoubleArrowRightIcon />
            <strong>{skill1}</strong>
          </p>
          <h5>{persentage1}</h5>
        </div>
        <div className={styled.persentage}>
          <div className={styled.persentagewidth}>
            <ProgressBar auto={"75%"} />
          </div>
        </div>
        <div className={styled.softSkill}>
          <p>
            <KeyboardDoubleArrowRightIcon />
            <strong>{skill2}</strong>
          </p>
          <h5>{persentage2}</h5>
        </div>
        <div className={styled.persentage}>
          <div className={styled.persentagewidth}>
            <ProgressBar auto={"65%"} />
          </div>
        </div>{" "}
        <div className={styled.softSkill}>
          <p>
            <KeyboardDoubleArrowRightIcon />
            <strong>{skill3}</strong>
          </p>
          <h5>{persentage3}</h5>
        </div>
        <div className={styled.persentage}>
          <div className={styled.persentagewidth}>
            <ProgressBar auto={"95%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
