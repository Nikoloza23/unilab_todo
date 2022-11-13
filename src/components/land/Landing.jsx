import group from "../../assets/Group 3.svg";

import "./landing.scss";

const Start = () => {
  return (
    <div className="land_container">
      <div className="img_container">
        <img src={group} alt="" />
      </div>
      <h1 className="land_title">Keep Track Of Daily Tasks In Life</h1>
      <button>
        <h1>Get Started</h1>
      </button>
    </div>
  );
};

export default Start;
