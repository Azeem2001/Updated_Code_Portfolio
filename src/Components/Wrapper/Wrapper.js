import React from "react";
import Fade from "react-reveal/Fade";

import {  Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import MyResume from "../../Pages/MyResume/MyResume";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Profile from "../Profile/Profile";
import Rigester from "../../Pages/Rigester/Rigester";
import Login from "../../Pages/Login/Login";
const Wrapper = ({ hide, none, children , isImage = true }) => {
  //   const [first, setfirst] = useState(second);
  return (
    <div style={{ display: hide }}>
      <Grid container spacing={1}>
        {
          isImage && <Grid item xl={3.8} lg={4}>
          <Fade left>
          <div className="fixed">
            <Profile none={isImage ? "block" : "none" } />
          </div>
          </Fade>
        </Grid>
        }
       {
        isImage ? (
          <Grid item xl={8.2} lg={8} md={12} sm={12} xs={12} wrap={"wrap"}>
          <div className="overflow">
              {children}
          </div>
        </Grid>
        ) : (
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} wrap={"wrap"}>
             <Fade>
          
          <div className="overflow">
              {children}

          </div>
          </Fade>

        </Grid>
        )
       }
      </Grid>
    </div>
  );
};

export default Wrapper;
