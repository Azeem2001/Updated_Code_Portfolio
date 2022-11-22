import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import MyBlog from "./Pages/MyBlog/MyBlog";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import MyResume from "./Pages/MyResume/MyResume";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Rigester from "./Pages/Rigester/Rigester";
import Login from "./Pages/Login/Login";
import Wrapper from "./Components/Wrapper/Wrapper";
import { auth, onAuthStateChanged, getDoc, doc, db } from "./firebase";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { client } from "./client";
import Sofar from "./Pages/Sofar/Sofar";
import Podcast from "./Pages/Podcast/Podcast";

function App({ none }) {
  let location = window.location.pathname;
  let [allData, setAllData] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {}, [location]);
  const handleSaparater = (data, value) => {
    let filteredData = data?.filter(
      (item) =>
        item?.sys?.contentType?.sys?.id?.toLowerCase() === value.toLowerCase()
    );

    return filteredData;
  };
  useEffect(() => {
    client.getEntries().then(({ items }) => {
      setAllData({
        ...allData,
        blog: handleSaparater(items, "blogs"),
        product: handleSaparater(items, "product"),
        sofar: handleSaparater(items, "sofar"),
        podcast: handleSaparater(items, "podCast"),
      });
    });
  }, []);
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      // ...
      let data = {
        ...(await getCurrentUser(uid)),
        uid: user?.uid,
      };
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      localStorage.removeItem("user");
    }
  });

  const getCurrentUser = async (uid) => {
    try {
      const res = doc(db, "user", uid);
      const getData = await getDoc(res);
      return {
        ...getData?.data(),
      };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />

          <Route
            path="/about"
            element={
              <Wrapper>
                <About />
              </Wrapper>
            }
          />
          <Route
            path="/myResume"
            element={
              <Wrapper>
                <MyResume />
              </Wrapper>
            }
          />
          <Route
            path="/contactme"
            element={
              <Wrapper>
                <ContactMe />
              </Wrapper>
            }
          />
          <Route
            path="/myblog"
            element={
              <Wrapper isImage={false}>
                <MyBlog data={allData?.blog} user={user} />
              </Wrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Wrapper>
                <Portfolio data={allData?.product} />
              </Wrapper>
            }
          />

          <Route
            path="/sofar"
            element={
              <Wrapper>
                <Sofar data={allData?.sofar} />
              </Wrapper>
            }
          />
          <Route
            path="/podcast"
            element={<Wrapper>{<Podcast data={allData?.podcast} />}</Wrapper>}
          />

          {!auth?.currentUser?.uid && (
            <>
              <Route
                path="/rigester"
                element={
                  <Wrapper>
                    <Rigester />
                  </Wrapper>
                }
              />
              <Route
                path="/login"
                element={
                  <Wrapper>
                    <Login />
                  </Wrapper>
                }
              />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
