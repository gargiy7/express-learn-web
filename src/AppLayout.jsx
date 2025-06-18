import React from "react";
import Body from "./componenets/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./componenets/Profile";
import Login from "./componenets/Login";

const AppLayout = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default AppLayout;
