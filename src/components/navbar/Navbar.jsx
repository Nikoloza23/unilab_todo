import prosta from "../../assets/Group 3.svg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <h1>TO DO</h1>
      <div className="navbar_right_side">
        <div>Your Name</div>
        <img src={prosta} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
