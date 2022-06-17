import React from 'react'
import './FindMore.scss'
import firstimg from '../../assets/imgs/img3.png'
import secondimg from '../../assets/imgs/img5.png'
import line from '../../assets/imgs/line.png'
import Container from '../../Container/Container'

const FindMore = () => {
  return (
    <Container>
      <div className="find">
        <div className="find__summer_div">
          <img className="find__line" src={line} alt="line" />
          <div className="find__img_div">
            <img className="find__img" src={secondimg} alt="flower" />
          </div>
          <div className="find__summer-titleDiv">
            <h4 className="find__title">
              Summer Cactus <br /> & Succulents
            </h4>
            <p className="find__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <div className="find__buton">
              <button className="find__btn btn">
                Find more
                <box-icon color="white" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="find__summer_div">
          <img className="find__line" src={line} alt="line" />
          <div className="find__img_div">
            <img className="find__img" src={firstimg} alt="flower" />
          </div>
          <div className="find__summer-titleDiv">
            <h4 className="find__title">
              Styling Trends <br /> & much more
            </h4>
            <p className="find__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <div className="find__buton">
              <button className="find__btn btn">
                Find more
                <box-icon color="white" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FindMore
