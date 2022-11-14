import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import UserPhoto from "../../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48.svg";

import "./adduser.scss";

const AddUser = () => {
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");

  function uploadImage(e) {
    setImage(e.target.files[0]);
  }

  function handleApi(e) {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("https://63725dd6025414c6370ddfdc.mockapi.io/todo", formData)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="main_container">
      <div className="userContainer">
        <div className="userContainer_mini">
          <h1 className="second_title">Get Started</h1>
          <div className="user_photo_container">
            <div className="add_photo">add a photo</div>
            <div className="photo_background">
              <label htmlFor="fileInput">
                <img src={UserPhoto} alt="" />
              </label>
            </div>
              <button onClick={handleApi} style={{ display: "none" }}>
                <input
                  className="upload_input"
                  type="file"
                  name="file"
                  id="fileInput"
                  onChange={uploadImage}
                  style={{ display: "none" }}
                />
              </button>
          </div>
          <div className="input_fill">fill in you name</div>
          <input className="user_input" type="text" placeholder="your name" />
          <NavLink to="/todo">
            <button>Sign In</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
