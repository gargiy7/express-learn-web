import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Profile = () => {
  const userData = useSelector((store) => store.user);

  return (
    <div>
      {" "}
      <div className="flex justify-center py-10">
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Profile</h2>

            {/* UserNAME */}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder= {userData ? userData?.name : "Username"}
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            <p className="validator-hint">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>

            {/* EMAIL */}
            <label className="input validator -mt-12">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder={userData ? userData?.email : "mail@site.com"} required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            {/* PASSWORD */}
 
            {/* IMAGE PATH */}

            <label className="input">
              Path
              <input type="text" className="grow" placeholder="src/app/" />
              <span className="badge badge-neutral badge-xs">Optional</span>
            </label>

            {/* login / sign up toglle function  */}

            <div className="card-actions justify-end my-3">
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
