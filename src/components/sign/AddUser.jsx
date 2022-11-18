import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserPhoto from "../../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48.svg";

import "./adduser.scss";

const AddUser = () => {
  const [image, setImage] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const navigate = useNavigate();

  function handleJoin() {
    if (!image && !enteredName) return;
    localStorage.setItem("joinedUserProfile", image);
    localStorage.setItem("joinedUsername", enteredName);
    navigate("/todo");
  }

  return (
    <div className="main_container">
      <div className="userContainer">
        <div className="userContainer_mini">
          <h1 className="second_title">Get Started</h1>
          {!image ? (
            <div className="user_photo_container">
              <label className="add_photo" htmlFor="fileInput">
                add a photo
                <div className="photo_background">
                  <img src={UserPhoto} alt="" />
                </div>
              </label>
              <input
                className="upload_input"
                type="file"
                name="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => {
                  if (e.target.files[0].size > 5000000) {
                    window.alert("ფოტოს არ უნდა იყოს 5MB_ზე მეტი");
                  } else setImage(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
            </div>
          ) : (
            <div className="selected_photo">
              <img src={URL.createObjectURL(image)} alt="not fount" />
            </div>
          )}
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
