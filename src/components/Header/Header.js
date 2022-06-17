import React, { useState } from 'react'
import './Header.scss'
import './HeaderRespon.scss'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/imgs/logo.svg'
import shopIcon from '../../assets/imgs/shopIcon.png'
import doorIcon from '../../assets/imgs/doorIcon.png'
import Container from '../../Container/Container'
import Responsive from './Responsive'

function Header() {
  let [isClicked, setClick] = useState(false)
  return (
    <>
      <Container>
        <section className="header" id="header">
          <div className="header__main_div">
            <div className="header__logo_div">
              <NavLink to="/" className="header__logo_link " href="/">
                <img className="header__logo_img" src={logo} alt="logo" />
              </NavLink>
            </div>
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'actived' : 'nonactived'
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'actived' : 'nonactived'
                    }
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'actived' : 'nonactived'
                    }
                    to="/care"
                  >
                    Plant Care
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'actived' : 'nonactived'
                    }
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__login_div">
              <div className="header__login">
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
            <button
              className="header__bar_btn"
              onClick={() => setClick(!isClicked)}
            >
              <FontAwesomeIcon className="header__bar" icon={faBars} />
            </button>
          </div>
          <hr className="header__hr" />
        </section>
        <Responsive isClicked={isClicked} />
      </Container>
    </>
  )
}

export default Header
