import React from 'react'
import Container from '../../Container/Container'
import './Posts.scss'
import img1 from '../../assets/imgs/img11.png'
import img2 from '../../assets/imgs/img13.png'
import img3 from '../../assets/imgs/img14.png'
import img4 from '../../assets/imgs/img15.png'

const Posts = () => {
  return (
    <Container>
      <h2 className="post__title">Our Blog Posts</h2>
      <p className="post__text">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <ul className="post__list">
        <li className="post__item">
          <div>
            <img src={img1} alt="flowers" />
          </div>
          <div className="post__desc_div">
            <span className="post__span">September 12 I Read in 6 minutes</span>
            <h4 className="post__name">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="post__desc">
              Cacti are succulents are easy care <br /> plants for any home or
              patio.
            </p>
            <div className="post__button_div">
              <button className="post__btn">
                Read more
                <box-icon color="black" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </li>
        <li className="post__item">
          <div>
            <img src={img2} alt="flowers" />
          </div>
          <div className="post__desc_div">
            <span className="post__span">September 12 I Read in 2 minutes</span>
            <h4 className="post__name">
              Top 10 Succulents for <br /> Your Home
            </h4>
            <p className="post__desc">
              Cacti are succulents are easy care <br /> plants for any home or
              patio.
            </p>
            <div className="post__button_div">
              <button className="post__btn">
                Read more
                <box-icon color="black" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </li>
        <li className="post__item">
          <div>
            <img src={img3} alt="flowers" />
          </div>
          <div className="post__desc_div">
            <span className="post__span">September 12 I Read in 3 minutes</span>
            <h4 className="post__name">
              Cacti & Succulent <br /> Care Tips
            </h4>
            <p className="post__desc">
              Cacti are succulents are easy care <br /> plants for any home or
              patio.
            </p>
            <div className="post__button_div">
              <button className="post__btn post__green">
                Read more
                <box-icon color="green" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </li>
        <li className="post__item">
          <div>
            <img src={img4} alt="flowers" />
          </div>
          <div className="post__desc_div">
            <span className="post__span">September 12 I Read in 2 minutes</span>
            <h4 className="post__name">
              Best Houseplants <br /> Room by Room
            </h4>
            <p className="post__desc">
              Cacti are succulents are easy care <br /> plants for any home or
              patio.
            </p>
            <div className="post__button_div">
              <button className="post__btn">
                Read more
                <box-icon color="black" name="right-arrow-alt"></box-icon>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  )
}

export default Posts
