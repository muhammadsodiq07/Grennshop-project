import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/imgs/logo.svg";
import shopIcon from "../../assets/imgs/shopIcon.png";
import doorIcon from "../../assets/imgs/doorIcon.png";
import { NavLink } from "react-router-dom";
import "./HeaderRespon.scss";

function Responsive({isClicked}) {

  return (
    <section
    style={{display: isClicked ? 'block' : 'none'}}
    className="responsive" id="responsive"
    >
      <div className="responsive__main_div">
        <div className="header__logo_div">
          <NavLink to="/" className="header__logo_link " href="/">
            <img className="header__logo_img" src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className="responsive__nav">
          <ul className="responsive__list">
            <li className="responsive__item">
              <NavLink className="responsive__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="responsive__item">
              <NavLink className="responsive__link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="responsive__item">
              <NavLink className="responsive__link" to="/care">
                Plant Care
              </NavLink>
            </li>
            <li className="responsive__item">
              <NavLink className="responsive__link" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="responsive__login_div">
          <div className="responsive__login">
            <button className="heaeder__btn_icon">
              <FontAwesomeIcon className="header__search" icon={faSearch} />
            </button>
            <button className="heaeder__btn_icon">
              <img className="header__shop_img" src={shopIcon} alt="icon" />
            </button>
            <button className="header__login_btn btn">
              <img
                className="heaeder__btn_doorIcon"
                src={doorIcon}
                alt="doorIcon"
              />
              Login
            </button>
          </div>
        </div>
      </div>
      <hr className="header__hr" />
    </section>
  );
}

export default Responsive;
