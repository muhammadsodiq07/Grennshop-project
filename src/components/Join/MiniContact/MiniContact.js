import React from 'react'
import Container from '../../../Container/Container'
import './MiniContact.scss'
import logo from '../../../assets/imgs/logo.svg'

const MiniContact = () => {
  return (
    <Container>
      <div className="miniContact___backround">
        <div className="miniContact">
          <div className="miniContact__logo_div">
            <img src={logo} alt="logo" />
          </div>
          <div className="miniContact__location_div">
            <div className="miniContact__loaction">
              <box-icon color="green" name="location-plus"></box-icon>
              <span className="miniContact__link">
                70 West Buckingham Ave. <br /> Farmingdale, NY 11735
              </span>
            </div>
          </div>
          <div className="miniContact__location_div">
            <div className="miniContact__loaction">
              <box-icon color="green" name="message-rounded-detail"></box-icon>
              <a className="miniContact__link" href="/">
                contact@greenshop.com
              </a>
            </div>
          </div>
          <div className="miniContact__location_div">
            <div className="miniContact__loaction">
              <box-icon color="green" name="phone-call"></box-icon>
              <a className="miniContact__link" href="+88 01911 717 490">
                +88 01911 717 490
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MiniContact
