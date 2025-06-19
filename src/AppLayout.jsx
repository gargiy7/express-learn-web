import React from "react";
import Body from "./componenets/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./componenets/Profile";
import Login from "./componenets/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import BodyDefault from "./componenets/BodyDefault";
import UserDashboard from "./componenets/UserDashboard";

const AppLayout = () => {
  return (
    <>
      <div>
        <Provider store={appStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Body />}>
                <Route index element={<BodyDefault />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="userdashboard" element={<UserDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
};

export default AppLayout;
