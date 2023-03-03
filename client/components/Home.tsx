import React from "react";
import GoogleOAuthButton from "./GoogleOAuthButton";
// import image from "../../applitrack_main.png";

const Home: React.FC = () => {
  return (
    <div>
      <div className="main">
        <h1 className="title">Job Tracker</h1>
        <GoogleOAuthButton />
      </div>
      {/* <img src={image} /> */}
    </div>
  );
};

export default Home;
