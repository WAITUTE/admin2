import React, {  useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./topbar.scss";
import {logOut} from "../../context/authContext/apiCalls";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  const { isFetching, dispatch} = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    logOut(dispatch)

  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="logoutChance">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            <button 
              className="logout"
              onClick={handleLogout}
              disabled={isFetching}            
            >Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
