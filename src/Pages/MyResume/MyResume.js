import React from "react";
import styled from "./MyResume.module.scss";
import { Grid } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import SkillCard from "../../Components/SkillCard/SkillCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CustomButton from "../../Components/Button/CustomButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import Fade from "react-reveal/Fade"
const MyResume = () => {
  const navigate = useNavigate();
  return (
   <>
    <Fade right>
    <div className={styled.ResumeContainer}>
      <Grid container>
        <Grid item xl={0.7}>
          <div className={styled.LeftSide}>
            <div className={styled.Icon}>
              <BadgeIcon />
            </div>
            <div className={styled.text}>
              <h1>
                RESUME <span>ME</span>
              </h1>
            </div>
          </div>
        </Grid>
        <Grid item xl={11} md={10.5} sm={10.7} xs={10.5}>
          <div className={styled.RightSide}>
            <h2>
              MY <span>RESUME</span>
            </h2>
            <div className={styled.CrossButton}>
              <button onClick={() => navigate("/")}>
                <CancelIcon />
              </button>
            </div>
            <div className={styled.SkillContainer}>
              <h3>Skills</h3>
              <p className={styled.Border}></p>
              <div className={styled.skillItem}>
                <Grid container flexWrap={"wrap"} spacing={5}>
                  <Grid item width={"50%"} xl={6} sm={12} xs={12}>
                    <SkillCard
                      heading={"Soft SKILLS"}
                      skill={"Leader Ship"}
                      skill1={"Teamwork"}
                      skill2={"Communication"}
                      skill3={"Problem Solving"}
                      persentage={"85%"}
                      persentage1={"75%"}
                      persentage2={"65%"}
                      persentage3={"95%"}
                    />
                  </Grid>
                  <Grid width={"50%"} item xl={6} sm={12} xs={12}>
                    <SkillCard
                      heading={"Hard SKILLS"}
                      skill={"HTML5 / CSS3"}
                      skill1={"Javascript / React.js"}
                      skill2={" PHP / Laravel "}
                      skill3={" UI / UX Design "}
                      persentage={"85%"}
                      persentage1={"75%"}
                      persentage2={"65%"}
                      persentage3={"95%"}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={styled.EducationContainer}>
              <h3>Education</h3>
              <p className={styled.Border}></p>
              <div className={styled.serviceContent}>
                <Grid container spacing={5}>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={" 2017 - 2018 China "}
                        skill={"Web Programming Course"}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={" 2013 - 2017 New York "}
                        skill={"Masters Degree"}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={" 2009 - 2013 Finland "}
                        skill={"Bachelor Degree "}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={" 2006 - 2009 New York "}
                        skill={" Engineering Diploma "}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={styled.ExperienceContainer}>
              <h3>Experience</h3>
              <p className={styled.Border}></p>
              <div className={styled.serviceContent}>
                <Grid container spacing={5}>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={"  2017 - Present Google  "}
                        skill={"Full-Stack Web Developer"}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={"  2013 - 2017 IBM  "}
                        skill={"UI / UX Designer"}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={"  2010 - 2013 Envato  "}
                        skill={"Front-End Developer "}
                      />
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <ServiceCard
                        heading={"  2008 - 2010 Adobe  "}
                        skill={" Community Manager "}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={styled.FunFact}>
              <h3>Fun Facts</h3>
              <p className={styled.Border}></p>
              <div className={styled.serviceContent}>
                <Grid container  spacing={7.7}>
                  <Grid item xl={4} md={6} sm={6} xs={12}>
                    <div className={styled.WorkHistory}>
                      <WorkHistoryIcon />
                      <h1>5+</h1>
                      <p>
                        <KeyboardDoubleArrowRightIcon />
                        <strong>Years Experience</strong>
                      </p>
                    </div>
                  </Grid>
                  <Grid item xl={4} md={6} sm={6} xs={12}>
                    <div className={styled.WorkHistory}>
                      <ThumbUpAltIcon />
                      <h1>40+</h1>
                      <p>
                        <KeyboardDoubleArrowRightIcon />
                        <strong>Done Projects</strong>
                      </p>
                    </div>
                  </Grid>
                  <Grid item xl={4} md={12} sm={12} xs={12}>
                    <div className={styled.WorkHistory}>
                      <FavoriteIcon />
                      <h1>80+</h1>
                      <p>
                        <KeyboardDoubleArrowRightIcon />
                        <strong>Happy Customers</strong>
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={styled.btn}>
              <CustomButton
                title={"DownLoad"}
                item={" Cv"}
                Icon={<PictureAsPdfIcon />}
              />{" "}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    </Fade>
   </>
  );
};

export default MyResume;
