import { Avatar, IconButton } from "@material-ui/core";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import React, { useState } from "react";
import useStateValue from "./AppState";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isClick, setIsClick] = useState(false);

  const handleWidth = () => {
    setIsClick(!isClick);
  };

  const playBell = () => {
    // play a bell sound
  }

  let check = isClick ? `header expand` : `header`;

  return (
    <div className={check}>
      <div className="header__left">
        <img
          src="https://www.logopik.com/wp-content/uploads/edd/2018/06/Facebook-icon-circle-vector-free-download.png"
          alt="logo"
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user?.photoURL || "not-found"} />
          <h4>{user?.displayName || "Aditya"}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive onClick={playBell}/>
        </IconButton>
        <IconButton onClick={handleWidth}>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
