import React from 'react'
import './Join.scss'
import cactus from '../../assets/imgs/cactus1.svg'
import cactus2 from '../../assets/imgs/cactus2.svg'
import cactus3 from '../../assets/imgs/cactus.svg'
import Container from '../../Container/Container'

const Join = () => {
  return (
    <Container>
      <div className="join">
        <ul className="join__list">
          <li className="join__item">
            <div className="join__cactus">
              <div>
                <img src={cactus} alt="cactus" />
              </div>
              <h4 className="join__name">Garden Care</h4>
              <p className="join__text">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </li>
          <li className="join__item">
            <div className="join__cactus">
              <div>
                <img src={cactus2} alt="cactus" />
              </div>
              <h4 className="join__name">Garden Care</h4>
              <p className="join__text">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </li>
          <li className="join__item">
            <div className="join__cactus">
              <div>
                <img src={cactus3} alt="cactus" />
              </div>
              <h4 className="join__name">Garden Care</h4>
              <p className="join__text">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </li>
          <li className="join__item">
            <div className="join__cactus">
              <p className="join__desc">Would you like to join newsletters?</p>
              <div className="join__input_div">
                <input
                  className="join__input"
                  type="text"
                  placeholder="enter your email address..."
                />
                <button className="join__btn btn">Join</button>
              </div>
              <p className="join__text join__input_text">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Join
