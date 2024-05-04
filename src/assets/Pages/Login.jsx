import { useState } from "react";
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
      .then((res) => {
        GoogleAuthProvider.credentialFromResult(res);
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
      })
      .catc((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
          <button onClick={handelGoogle} className="w-60">
            <img src="/google.png" alt="google" className="w-full"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
