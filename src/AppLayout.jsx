import React, { Suspense, lazy } from "react";
import Body from "./componenets/Body";
import { BrowserRouter, Routes, Route } from "react-router";
// import Profile from "./componenets/Profile";
// import Login from "./componenets/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import BodyDefault from "./componenets/BodyDefault";
// import UserDashboard from "./componenets/UserDashboard";
// import ProductsCard from "./componenets/ProductsCard";

// ✅ Lazy-loaded pages
// const BodyDefault = lazy(() => import("./componenets/BodyDefault"));
const Login = lazy(() => import("./componenets/Login"));
const Profile = lazy(() => import("./componenets/Profile"));
const UserDashboard = lazy(() => import("./componenets/UserDashboard"));
const ProductsCard = lazy(() => import("./componenets/ProductsCard"));

{
  /* <Route index element={<BodyDefault />} /> */
}

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<BodyDefault />} />
            <Route
              path="login"
              element={
                <Suspense fallback={<div>Loading Login...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback={<div>Loading Profile...</div>}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="userdashboard"
              element={
                <Suspense fallback={<div>Loading Dashboard...</div>}>
                  <UserDashboard />
                </Suspense>
              }
            />
            <Route
              path="productcards"
              element={
                <Suspense fallback={<div>Loading Products...</div>}>
                  <ProductsCard />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default AppLayout;
