import "./profile.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router";
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'

const Profile = () => {
  const publicAssetsFolder = process.env.REACT_APP_ASSET_DIR
  const [user, setUser] = useState({});
   const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ?
                  `${publicAssetsFolder}${user.coverPicture}`
                  : `${publicAssetsFolder}person/noCover.png`
                }
                alt=""
              />
              <img
                className="profileUserImg"
                   src={user.profilePicture ?
                  `${publicAssetsFolder}${user.profilePicture}`
                  : `${publicAssetsFolder}person/noAvatar.png`
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
                     <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
         <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;