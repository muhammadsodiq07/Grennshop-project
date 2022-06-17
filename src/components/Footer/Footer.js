import React from 'react'
import './Footer.scss'
import Container from '../../Container/Container'
import facebook from '../../assets/imgs/facebook.svg'
import instagram from '../../assets/imgs/instagram.svg'
import twiter from '../../assets/imgs/twiter.svg'
import linkiedn from '../../assets/imgs/linkiedn.svg'
import union from '../../assets/imgs/union.svg'
import company from '../../assets/imgs/company.png'

const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <ul className="footer__list2">
          <h4 className="footer__name">My Account</h4>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              My Account
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Our stores
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Contact us
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Career
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Specials
            </a>
          </li>
        </ul>
        <ul className="footer__list1">
          <h4 className="footer__name">Help & Guide</h4>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Help Center
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              How to Buy
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Shipping & Delivery
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              How to Return
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Product Policy
            </a>
          </li>
        </ul>
        <ul className="footer__list1">
          <h4 className="footer__name">Categories</h4>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              House Plants
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Potter Plants
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Seeds
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Small Plants
            </a>
          </li>
          <li className="footer__item1">
            <a className="footer__link1" href="/">
              Accessories
            </a>
          </li>
        </ul>
        <div className="footer__div">
          <h4 className="footer__name">Social Media</h4>
          <ul className="footer__list4">
            <li className="footer__item4">
              <a className="footer__link1" href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="footer__item4">
              <a className="footer__link1" href="/">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="footer__item4">
              <a className="footer__link1" href="/">
                <img src={twiter} alt="twiter" />
              </a>
            </li>
            <li className="footer__item4">
              <a className="footer__link1" href="/">
                <img src={linkiedn} alt="linkiedn" />
              </a>
            </li>
            <li className="footer__item4">
              <a className="footer__link1" href="/">
                <img src={union} alt="union" />
              </a>
            </li>
          </ul>
          <h4 className="footer__name">We accept</h4>
          <img className="footer__companny" src={company} alt="company" />
        </div>
      </footer>
    </Container>
  )
}

export default Footer
