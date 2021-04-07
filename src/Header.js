import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="Header__main">
      <img
        className="head__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* header white big prod uct search bar*/}
      <div className="header__search">
        <input className="header__searchInput" type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>
      {/* header sign in extra options*/}

      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionLineOne">hello guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__options">
          <span className="header__optionLineOne">Return</span>
          <span ClassNam="header__optionLineTwo"> Orders</span>
        </div>

        <div className="header__options">
          <span classname="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
