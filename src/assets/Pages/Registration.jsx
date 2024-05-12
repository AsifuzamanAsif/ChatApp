import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const handelSubmite = () => {
    if (name == "") {
      setUserError({ nameError: "Name is Required !" });
    } else if (email == "") {
      setUserError({ emailError: "Email is Required !" });
    } else if (password == "") {
      setUserError({ passwordError: "Password is Required !" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "/user.png",
          }).then(() => {
            toast.success(
              "Registration Successful !. Please Verify Your Email",
              {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                theme: "light",
              }
            );
            setName("");
            setemail("");
            setpassword("");
            setUserError("");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code.includes("auth/invalid-email")) {
            setUserError({ emailError: "Invalid Email !" });
          }
          if (error.code.includes("auth/email-already-in-use")) {
            setUserError({ emailError: "This Email-already-in-use" });
          }
          if (error.code.includes("auth/weak-password")) {
            setUserError({
              passwordError: "Password should be at least 6 characters",
            });
          }
        });
    }
  };
  return (
    <section className=" bg-white flex justify-center ">
      <ToastContainer />
      <div className="mt-48">
        <div action="" className="form_main">
          <img
            className="w-[150px]"
            src="ChatApp_Logo-removebg-preview.png"
            alt=""
          />
          <h1 className="text-2xl font-bold text-primary font-primary">
            Get started with easily register
          </h1>
          <p className="font-primary text-brand">
            Free register and you can enjoy it
          </p>
          <div className="inputContainer">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="inputField"
              id="username"
              placeholder="Username"
            />
            {userError.nameError && (
              <p className="w-fit text-white bg-red-500 py-1 px-2 text-[10px]">
                {userError.nameError}
              </p>
            )}
          </div>
          <div className="inputContainer">
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
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              className="inputField"
              id="Email"
              placeholder="Email"
            />
          </div>
          {userError.emailError && (
            <p className="w-fit text-white bg-red-500 py-1 px-2 text-[10px] z-20">
              {userError.emailError}
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
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="inputField"
              id="password"
              placeholder="Password"
            />
            {userError.passwordError && (
              <p className="w-fit text-white bg-red-500 py-1 px-2 text-[10px] z-20">
                {userError.passwordError}
              </p>
            )}
          </div>
          <button
            onClick={handelSubmite}
            className="font-primary font-semibold"
            id="button"
          >
            Sign up
          </button>
          <p>
            Don't have an account ?{" "}
            <Link className="font-primary" to="/login">
              Log In
            </Link>
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default registration;
