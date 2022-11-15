import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserPhoto from "../../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48.svg";

import "./adduser.scss";

const AddUser = () => {
  const [image, setImage] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const navigate = useNavigate();

  function handleJoin() {
    if (!image || !enteredName) return;
    localStorage.setItem("joinedUserProfile", image);
    localStorage.setItem("joinedUsername", enteredName);
    navigate("/todo");
  }

  function uploadImage(e) {
    const files = e.target.files[0];
    setImage(files.name);
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
                <img src={image ? image : UserPhoto} alt="" />
              </label>
            </div>
            <input
              className="upload_input"
              type="file"
              name="file"
              id="fileInput"
              onChange={uploadImage}
              style={{ display: "none" }}
            />
          </div>
          <div className="input_fill">fill in you name</div>
          <input
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            className="user_input"
            type="text"
            placeholder="your name"
          />
          <button onClick={handleJoin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
