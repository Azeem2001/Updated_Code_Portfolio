import { style } from "@mui/system";
import React from "react";
import styled from "./Sofar.module.scss";
import { Grid } from "@mui/material";
import Fade from "react-reveal/Fade";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import Card from "../../Components/Cards/Card";
import SofarCard from "../../Components/SofarCard/SofarCard";
const Sofar = ({ data }) => {
  // console.log(data)

  const navigate = useNavigate();
  return (
    <>
      <Fade right>
        <div className={styled.ContactMeContainer}>
          <Grid container wrap="no-wrap">
            <Grid item xl={0.7}>
              <div className={styled.LeftSide}>
                <div className={styled.Icon}>
                  <YouTubeIcon />
                </div>
                <div className={styled.text}>
                  <h1>
                    MY <span>SO FAR</span>
                  </h1>
                </div>
              </div>
            </Grid>
            <Grid item xl={11} md={10.5} sm={11.3} xs={11}>
              <div className={styled.RightSide}>
                <h2>
                  MY <span>SO FAR</span>
                </h2>
                <div className={styled.CrossButton}>
                  <button onClick={() => navigate("/")}>
                    <CancelIcon />
                  </button>
                </div>
                <div className={styled.PersonalData}>
                  <h3>Projects</h3>
                  <p className={styled.Border}></p>
                  <div className={styled.Projects}>
                    <SofarCard data={data} />
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

export default Sofar;
