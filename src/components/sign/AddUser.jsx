import { NavLink } from "react-router-dom";

import UserPhoto from "../../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48.svg";

import "./adduser.scss";

const AddUser = () => {
  return (
    <div className="main_container">
      <div className="userContainer">
        <div className="userContainer_mini">
          <h1 className="second_title">Get Started</h1>
          <div className="user_photo_container">
            <div className="add_photo">add a photo</div>
            <div className="photo_background">
              <img src={UserPhoto} alt="" />
            </div>
          </div>
          <div className="input_fill">fill in you name</div>
          <input type="text" placeholder="your name" />
          <NavLink to="/todo">
            <button>
              <h1>Sign In</h1>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
