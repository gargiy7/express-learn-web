import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Profile = () => {
  const userData = useSelector((store) => store.user);
  const userId = userData ? userData._id : null;

  const [name, setName] = useState(userData ? userData.name : "");
  const [email, setEmail] = useState(userData ? userData.email : "");
  const [image, setImage] = useState(userData ? userData.image : "");

  const dispatch = useDispatch();

  const profileUpdateHandler = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_API_URL}/users/profile/${userId}`,
        { name, email, image },
        { withCredentials: true }
      );
      console.log("updatedUser ", response);
      dispatch(addUser(response.data.updatedUser));

      //navigate("/userdashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
      <div className="flex justify-center py-10">
        {/* PROFILE PREVIEW */}
        <div className="avatar  mr-8">
          <div className="w-48 h-48 ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
            <img src={image} className="rounded-full" />
          </div>
        </div>

        {/* PROFILE UPDATE FORM - INPUT FIELDS */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-lg">Update Profile</legend>

          <label className="label text-base">Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input"
            placeholder="Username"
          />

          <label className="label text-base">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input"
            placeholder="Email"
          />

          <label className="input mt-3">
            <input
              type="text"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              className="grow"
              placeholder="src/app/"
            />
            <span className="badge badge-neutral badge-sm">Image Url</span>
          </label>

          <button
            className="btn btn-neutral mt-4"
            onClick={profileUpdateHandler}
          >
            Submit
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Profile;
