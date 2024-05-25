import { createRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoMdMore } from "react-icons/io";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { GiCrossMark } from "react-icons/gi";
// import { getDatabase } from "firebase/database";
import { getDatabase, ref as dref, set } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { updateProfile, getAuth, onAuthStateChanged } from "firebase/auth";
import { loggeduser } from "../../Slice/userSlice";

function User() {
  const db = getDatabase();
  const disptch = useDispatch();
  const auth = getAuth();
  const storage = getStorage();
  const user = useSelector((state) => state.userSlice.user);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handelClose = () => {
    setEnableEdit(false);
    setCropData("");
    setImage("");
  };

  const handelUpload = () => {
    setLoading(true);
    if (cropData) {
      const storageRef = ref(storage, user?.uid);
      uploadString(storageRef, cropData, "data_url").then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          onAuthStateChanged(auth, () => {
            updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            }).then(() => {
              set(dref(db, "user/" + user.uid), {
                email: user.email,
                profile_picture: downloadURL,
                username: user.displayName,
              });
              localStorage.setItem("user", JSON.stringify(auth.currentUser));
              disptch(loggeduser(auth.currentUser));
              setEnableEdit(false);
              setCropData("");
              setImage("");
              window.location.reload();
            });
          });
        });
      });
    }
  };

  return (
    <div className="text-sm w-96 bg-white rounded-lg overflow-hidden my-4 m-auto h-fit">
      {enableEdit && (
        <>
          <div className="flex justify-between">
            {cropData &&
              (loading ? (
                <button className=" bg-green-600 rounded-xl text-white">
                  <div className="section-center">
                    <div className="section-path">
                      <div className="globe">
                        <div className="wrapper">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  onClick={handelUpload}
                  className="py-1 px-2 bg-green-600 rounded-xl text-white"
                >
                  Save
                </button>
              ))}
            <button
              onClick={handelClose}
              className="py-1 px-2 bg-red-600 rounded-xl text-white"
            >
              <GiCrossMark />
            </button>
          </div>
          <div>
            <input className="py-2" type="file" onChange={onChange} />
            {image && (
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
              />
            )}
          </div>
          <button
            onClick={getCropData}
            className="py-2 px-2 bg-cyan-900 text-white rounded-xl my-1"
          >
            Crop Image
          </button>
        </>
      )}

      <div className="screen">
        <div className="Pheader flex flex-col m-auto left-0">
          <div
            onClick={() => setEnableEdit(true)}
            className="group relative text-white text-2xl cursor-pointer"
          >
            <IoMdMore className="text-white cursor-pointer" />
            <p className="text-black hidden absolute group-hover:block whitespace-nowrap">
              Edit Profile Picture
            </p>
          </div>
          <h4 className="mt-2 text-lg">My Profile</h4>
        </div>
        <img
          className="background"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKM6rRET9CTBdVhMPRZIYaT3fHRVVEoIAZ9D3lR9da2ZlTlRdoK1X7E9mOcp7cNWP912Cq-fkhmdpD6byoX5EoDNkOHaoZa0xKcOx-ccCWxNU8Mr9TabV6dnRPqdhMD4T0EwbcX0Alxp9Z-85RRY_T8fynoHjQI38wuQcnTfwJL88JiGYW2x6jkmDR/s1600/bg-new-1.jpg"
        />
        <div className="slider">
          <div className="header1 text-lg my-3">
            <div className="w-16 h-16 m-auto mt-2 ">
              <img
                className="w-full rounded object-center object-cover"
                src={cropData ? cropData : user?.photoURL}
                alt="avater"
              />
            </div>
            {user.displayName}
          </div>
          <div className="header2 text-lg">
            Email : {user.email}
            <div className="header2 text-lg flex gap-2 px-12">
              <ul className="flex justify-center items-center gap-2">
                <li>
                  <AiFillEdit />
                </li>
                <li> Bio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
