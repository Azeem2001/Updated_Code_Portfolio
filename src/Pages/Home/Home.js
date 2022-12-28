import React from "react";
import styled from "./Home.module.scss";
import Grid from "@mui/material/Grid";
import Card from "../../Components/Cards/Card";
import Profile from "../../Components/Profile/Profile";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-reveal";
import { TypeAnimation } from "react-type-animation";

const Home = ({ title, disc }) => {
  const navigate = useNavigate();
  return (
    <div className={styled.HomeContainer}>
      <div className={styled.HomeItem}>
        <div className={styled.RightSide}>
          <div className={styled.Cards}>
            <Grid container spacing={1} paddingLeft="14px">
              <Grid padding={2} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Zoom>
                  <div className={styled.PersonalInfo}>
                    <h3>HI THERE ! I'M</h3>
                    <h1>SAFYAN IQBAL</h1>
                    {/* <h2>BLOGGER</h2> */}
                    <TypeAnimation
                      sequence={[
                        "ACTOR",
                        1000,
                        "SONG WRITTER",
                        2000,
                        "YOUTUBER",
                        2000,
                        "PODCASTER",

                        () => {},
                      ]}
                      wrapper="h2"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: "2em" }}
                    />
                  </div>
                </Zoom>
              </Grid>
              <Grid padding={1} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div onClick={() => navigate("/about")}>
                  <Card title={"ABOUT"} disc={"ME"} />
                </div>
              </Grid>
              <Grid padding={1} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div onClick={() => navigate("/portfolio")}>
                  <Card title={"YOU"} disc={"TUBE"} xs={12} />
                </div>
              </Grid>
              <Grid padding={1} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div onClick={() => navigate("/sofar")}>
                  <Card title={"SO"} disc={"FAR"} />
                </div>
              </Grid>
              <Grid padding={1} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div onClick={() => navigate("/podcast")}>
                  <Card title={"POD"} disc={"CAST"} />
                </div>
              </Grid>
              <Grid padding={1} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div onClick={() => navigate("/contactme")}>
                  <Card title={"CONTACT"} disc={"ME"} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
