import React from "react";
import styled from "./About.module.scss";
import Fade from "react-reveal/Fade";
import { Grid } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomButton from "../../Components/Button/CustomButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EmailIcon from "@mui/icons-material/Email";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const About = () => {
  const women1 = "./images/woman.jpg";
  const navigate = useNavigate();
  return (
    <>
      <Fade right>
        <div className={styled.AboutContainer}>
          <Grid container flexGrow={"no-wrap"}>
            <Grid item xl={0.7}>
              <div className={styled.LeftSide}>
                <div className={styled.Icon}>
                  <BadgeIcon />
                </div>
                <div className={styled.text}>
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                </div>
              </div>
            </Grid>
            <Grid item xl={11} md={10.5} sm={10.5} xs={10}>
              <div className={styled.RightSide}>
                <h2>
                  ABOUT <span>ME</span>
                </h2>
                <div className={styled.CrossButton}>
                  <button onClick={() => navigate("/")}>
                    <CancelIcon />
                  </button>
                </div>
                <div className={styled.PersonalData}>
                  <h3>Personal Info</h3>
                  <p className={styled.Border}></p>
                  <div className={styled.content}>
                    <div className={styled.profile}>
                      <img src={women1} alt="women1" />
                      <h5>
                        I am a actor,songwriter,youtuber,podcaster,I'm open to
                        try new things as well. I'm so excited to share the
                        videos/podcast and other I have with you guys!!! Beings
                        in films/TV shows, sharing music i listen to and writing
                        is something I very keen On.
                      </h5>
                    </div>

                    <div className={styled.PersonalInfo}>
                      <div className={styled.InfoLeft}>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>First Name - </strong>
                          <span>Safyan</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Last Name - </strong>
                          <span>Iqbal</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Date of Birth - </strong>
                          <span>08 June 1992</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Nationality - </strong>
                          <span>United States</span>
                        </p>
                      </div>
                      <div className={styled.InfoRight}>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Phone - </strong>
                          <span>+76 21 19 34 20</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Email - </strong>
                          <span>you@yourwebsite.com</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Disabilty - </strong>
                          <span>Deaf</span>
                        </p>
                        <p>
                          <KeyboardDoubleArrowRightIcon />
                          <strong>Languages - </strong>
                          <span>BSL,English</span>
                        </p>
                      </div>
                    </div>
                    <div className={styled.Icon}>
                      <span>
                        <FacebookRoundedIcon />
                      </span>

                      <span>
                        <TwitterIcon />
                      </span>
                      <span>
                        <InstagramIcon />
                      </span>
                      <span>
                        <LinkedInIcon />
                      </span>
                    </div>
                    <div className={styled.Bottons}>
                      <CustomButton
                        title={"DownLoad"}
                        item={" Cv"}
                        Icon={<PictureAsPdfIcon />}
                      />{" "}
                      <div onClick={() => navigate("/myblog")}>
                        <CustomButton
                          title={"My"}
                          item={"Blog"}
                          Icon={<EmailIcon />}
                        />{" "}
                      </div>
                      {/* <div onClick={() => navigate("/contactme")}>
                        <CustomButton
                          title={"GET IN"}
                          item={"TOUCH"}
                        />{" "}
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className={styled.ServiceContainer}>
                  <h3>Services</h3>
                  <p className={styled.Border}></p>
                  <div className={styled.serviceContent}>
                    <Grid container spacing={5}>
                      <Grid item xl={6}>
                        <div>
                          <ServiceCard
                            heading={"Service 01"}
                            skill={"Web Design"}
                          />
                        </div>
                      </Grid>
                      <Grid item xl={6}>
                        <div>
                          <ServiceCard
                            heading={"Service 02"}
                            skill={"Web Development"}
                          />
                        </div>
                      </Grid>
                      <Grid item xl={6}>
                        <div>
                          <ServiceCard
                            heading={"Service 03"}
                            skill={" UI / UX Design "}
                          />
                        </div>
                      </Grid>
                      <Grid item xl={6}>
                        <div>
                          <ServiceCard
                            heading={"Service 04"}
                            skill={" Photography "}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
};

export default About;
