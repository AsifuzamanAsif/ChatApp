import { createRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoMdMore } from "react-icons/io";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getDatabase, ref, set } from "firebase/database";
function User() {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

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

  return (
    <div className="text-sm w-96 bg-white rounded-lg overflow-hidden my-4 m-auto h-fit">
      {enableEdit && (
        <>
          <input type="file" onChange={onChange} />
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
          <button onClick={getCropData}
          className="py-2 px-4 bg-cyan-900 text-white rounded-xl my-2"
          >Crop Image</button>
        </>
      )}

      <div className="screen">
        <div className="Pheader flex flex-col m-auto left-0">
          <div
            onClick={() => setEnableEdit(true)}
            className="group relative text-white text-2xl cursor-pointer"
          >
            <IoMdMore className="text-white text-2xl cursor-pointer pt-2" />
            <p className="text-black hidden absolute group-hover:block whitespace-nowrap">
              Edit Profile Picture
            </p>
          </div>
          <h4 className="mt-2">My Profile</h4>
        </div>
        <img
          className="background"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKM6rRET9CTBdVhMPRZIYaT3fHRVVEoIAZ9D3lR9da2ZlTlRdoK1X7E9mOcp7cNWP912Cq-fkhmdpD6byoX5EoDNkOHaoZa0xKcOx-ccCWxNU8Mr9TabV6dnRPqdhMD4T0EwbcX0Alxp9Z-85RRY_T8fynoHjQI38wuQcnTfwJL88JiGYW2x6jkmDR/s1600/bg-new-1.jpg"
        />
        <div className="slider">
          <div className="header1">
            <div className="w-16 h-16 m-auto mt-2 ">
              <img
                className="w-full rounded object-center object-cover"
                src={cropData
                  ? cropData
                  : user?.photoURL}
                alt="avater"
              />
            </div>
            {user.displayName}
          </div>
          <div className="header2">
            Email : {user.email}
            <div className="flex gap-2 px-8 text-lg mt-3">
              <AiFillEdit />
              <p className="text-base">Bio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
