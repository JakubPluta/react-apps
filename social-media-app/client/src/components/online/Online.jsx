import React from "react";
import "./online.css";
const Online = ({ user }) => {
  const publicAssetsFolder = process.env.REACT_APP_ASSET_DIR
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={publicAssetsFolder + user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
