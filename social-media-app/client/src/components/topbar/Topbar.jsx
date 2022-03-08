import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const publicAssetsFolder = process.env.REACT_APP_ASSET_DIR;

  return (
    <div className="topbarContainer">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Soulmates</span>
      </Link>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for your soulmates, posts or videos"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? `${publicAssetsFolder}${user.profilePicture}`
                : `${publicAssetsFolder}person/noAvatar.png`
            }
            alt="noimage"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
