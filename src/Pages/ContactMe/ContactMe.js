import React from "react";
import styled from "./ContactMe.module.scss";
import Fade from "react-reveal/Fade";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import CustomButton from "../../Components/Button/CustomButton";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { height } from "@mui/system";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { FaTiktok, FaYoutube, FaDiscord } from "react-icons/fa";
const ContactMe = () => {
  const women1 = "./images/woman.jpg";
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xjvzpdzl");
  if (state.succeeded) {
    toast.success("your message has been send");
  }
  return (
    <>
      <Fade right>
        <div className={styled.ContactMeContainer}>
          <Grid container wrap="no-wrap">
            <Grid item xl={0.7}>
              <div className={styled.LeftSide}>
                <div className={styled.Icon}>
                  <RecentActorsIcon />
                </div>
                <div className={styled.text}>
                  <h1>
                    CONTACT <span>ME</span>
                  </h1>
                </div>
              </div>
            </Grid>
            <Grid item xl={11} md={10.5} sm={11.3} xs={11}>
              <div className={styled.RightSide}>
                <h2>
                  CONTACT <span>INFO</span>
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
                    <div className={styled.PersonalInfo}>
                      <div className={styled.InfoLeft}>
                        <h4>Address</h4>
                        <p>
                          <LocationOnIcon />
                          <span>Silicon Valley, USA</span>
                        </p>
                        <h4>Email</h4>
                        <p>
                          <EmailIcon />
                          <span>you@yourwebsite.com</span>
                        </p>
                      </div>
                      <div className={styled.InfoRight}>
                        <h4>Phone</h4>
                        <p>
                          <StayPrimaryPortraitIcon />
                          <span>+76 21 19 34 20</span>
                        </p>
                        <h4>Website</h4>
                        <p>
                          <LanguageIcon />
                          <span>www.yourwebsite.com</span>
                        </p>
                      </div>
                    </div>
                    <div className={styled.Icon}>
                      <h4>Social Media</h4>
                      <a href="https://www.facebook.com/Safyan-Iqbal-108390497300484">
                        <span>
                          <FacebookRoundedIcon />
                        </span>
                      </a>
                      <a>
                        <span href="https://twitter.com/SAiMedia96">
                          <TwitterIcon />
                        </span>
                      </a>

                      <a href="https://www.instagram.com/saimedia96/">
                        <span>
                          <InstagramIcon />
                        </span>
                      </a>
                      <a href="https://www.tiktok.com/@thesafyaniqbal?is_from_webapp=1&sender">
                        <span>
                          <FaTiktok />
                        </span>
                      </a>
                      <a href="https://www.youtube.com/channel/UChftk-Nvgr_qGDbePhCk3HA">
                        <span>
                          <FaYoutube />
                        </span>
                      </a>
                      <a href="https://discord.com/invite/2Y5dvn95b5">
                        <span>
                          <FaDiscord />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styled.ContactForm}>
                  <div className={styled.PersonalData}>
                    <h3>Contact Form</h3>
                    <p className={styled.Border}></p>
                    <div className={styled.Form}>
                      <div className={styled.FormItem}>
                        <p>Want to chat? Send me a message!</p>
                        <div className={styled.FormInput}>
                          <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input id="name" type="name" name="name" />
                            <br />
                            <label htmlFor="email">Email Address</label>
                            <br />
                            <input id="email" type="email" name="email" />
                            <ValidationError
                              prefix="Email"
                              field="email"
                              errors={state.errors}
                            />
                            <label></label>
                            <label htmlFor="name">Message</label>
                            <textarea id="message" name="message" />
                            <ValidationError
                              prefix="Message"
                              field="message"
                              errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}>
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
};

export default ContactMe;
