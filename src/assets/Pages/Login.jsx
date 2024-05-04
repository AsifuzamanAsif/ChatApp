import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loggeduser } from "../../Slice/userSlice";
const Login = () => {
  const disptch = useDispatch();
  const auth = getAuth();
  const db = getDatabase();
  let navegite = useNavigate();
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const handelSubmite = () => {
    if (loginData.email == "") {
      setemailError("Email is Required !");
    } else if (loginData.password == "") {
      setpasswordError("Password is Required ");
    } else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((res) => {
          if (res.user.emailVerified == false) {
            toast.error("Email is not Verified", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          } else {
            set(ref(db, "user/" + res.user.uid), {
              username: res.user.displayName,
              email: res.user.email,
              profile_picture: res.user?.photoURL,
            });
            console.log("login susseccful", res);
            toast.success("Login susseccful", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
            localStorage.setItem("user", JSON.stringify(res.user));
            disptch(loggeduser(res.user));
            console.log(res.user);
            setTimeout(() => {
              navegite("/Newsfeed");
            }, 1500);
          }
        })
        .catch((err) => {
          if (err.code == "auth/invalid-email") {
            setemailError("Invalid email ! Please valid Email");
          }
          if (err.code == "auth/invalid-credential") {
            toast.error("Authorization faild", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          }
          if (err.code == "auth/too-many-requests") {
            toast.error(
              "Too many request! user temporarily block pleare try agail later or reset your password",
              {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                theme: "light",
              }
            );
          }
        });
    }
  };
  const provider = new GoogleAuthProvider();
  const handelGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <section className=" flex justify-center ">
      <ToastContainer />
      <div className="mt-48">
        <div action="" className="form_main">
          <img
            className="w-[150px]"
            src="ChatApp_Logo-removebg-preview.png"
            alt=""
          />
          <h1 className="text-2xl font-bold text-primary font-primary">
            Login
          </h1>
          <p className="font-primary text-brand">
            Free register and you can enjoy it
          </p>
          <div className="inputContainer pt-5">
            <svg
              className="inputIcon"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="#2e2e2e"
              viewBox="0 0 16 16"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
            </svg>
            <input
              onChange={(e) => {
                setloginData({ ...loginData, email: e.target.value }),
                  setemailError("");
              }}
              type="text"
              className="inputField"
              id="Email"
              placeholder="Email"
            />
          </div>
          {emailError && (
            <p className="w-fit text-white bg-red-500 py-1 px-2 text-[10px] z-20">
              {emailError}
            </p>
          )}
          <div className="inputContainer">
            <svg
              className="inputIcon"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="#2e2e2e"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              onChange={(e) => {
                setloginData({ ...loginData, password: e.target.value }),
                  setpasswordError("");
              }}
              type="password"
              className="inputField"
              id="password"
              placeholder="Password"
            />
          </div>
          {passwordError && (
            <p className="w-fit text-white bg-red-500 py-1 px-2 text-[10px] z-20">
              {passwordError}
            </p>
          )}
          <button onClick={handelSubmite} id="button">
            Log In
          </button>
          <p>
            Create New Account ?{" "}
            <Link className="text-[]" to="/registration">
              Registration
            </Link>
          </p>
          <div onClick={handelGoogle} className="socials-container">
            <a href="#" className="social twitter">
              <svg height="1em" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a href="#" className="social facebook">
              <svg height="1em" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a href="/Newsfeed" className="social google-plus">
              <svg height="1em" viewBox="0 0 640 512">
                <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />
              </svg>
            </a>
            <a href="#" className="social instagram">
              <svg height="1em" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
