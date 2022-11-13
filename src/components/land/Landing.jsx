import { NavLink } from "react-router-dom";

import group from "../../assets/Group 3.svg";

import "./landing.scss";

const Start = () => {
  return (
    <div className="land_container">
      <div className="img_container">
        <img src={group} alt="" />
      </div>
      <h1 className="land_title">Keep Track Of Daily Tasks In Life</h1>
      <NavLink to="/sign" style={{ textDecoration: "none" }}>
        <button>
          <h1>Get Started</h1>
        </button>
      </NavLink>
    </div>
  );
};

export default Start;
