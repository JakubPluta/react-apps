import React from "react";
import "./friend.css";

const Friend = ({ user }) => {
  const publicAssetsFolder = process.env.REACT_APP_ASSET_DIR
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={publicAssetsFolder + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default Friend;
