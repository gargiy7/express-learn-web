import React, { useEffect } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile/view",
        { withCredentials: true }
      );
      console.log(response);
      dispatch(addUser(response.data));
      navigate("/userdashboard");
    } catch (error) {
      if (error.response.status == 401) {
        navigate("/");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col mx-12">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
