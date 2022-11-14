import prosta from "../../assets/Group 3.svg";
import { Navigate } from "react-router";

import "./navbar.scss";

const Navbar = () => {
  const userName = localStorage.getItem("joinedUsername");
  const userProfile = localStorage.getItem("joinedUserProfile");

  if (!userName || !userProfile) {
    return <Navigate to={"/sign"} />;
  }

  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>{userName ? userName : "YourName"}</div>
        <img src={prosta} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
