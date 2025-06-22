import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("umpire@test.com");
  const [password, setPassword] = useState("Umpire@1234");
  const [image, setImage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      // console.log(response);
      dispatch(addUser(response.data.user));
      navigate("/userdashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        { name, email, password, image },
        { withCredentials: true }
      );
      console.log(response);
      dispatch(addUser(response.data.user));
      navigate("/userdashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{isLogin ? " Log In" : "SignUp"}</h2>

          {/* UserNAME */}
          {!isLogin && (
            <>
              {" "}
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="3"
                  maxlength="30"
                  title="Only letters, numbers or dash"
                />
              </label>
              <p className="validator-hint">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>
            </>
          )}

          {/* EMAIL */}
          <label
            className={!isLogin ? "input validator -mt-9" : "input validator "}
          >
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
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          {/* PASSWORD */}
          <label className="input validator my-4">
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
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          {/* IMAGE PATH */}
          {!isLogin && (
            <label className="input">
              Path
              <input
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                className="grow"
                placeholder="src/app/"
              />
              <span className="badge badge-neutral badge-xs">Optional</span>
            </label>
          )}

          {/* login / sign up toglle function  */}
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "SignUp Now !" : "Already a User? Log In"}
          </span>
          <div className="card-actions justify-end my-3">
            <button
              className="btn btn-primary"
              onClick={!isLogin ? handleSignin : handleLogin}
            >
             {isLogin ? " Log In" : "SignUp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
