import React from "react";
import "./Hero.scss";
import flowers from "../../assets/imgs/flowes.png";
import sliderimg from "../../assets/imgs/slideimg.png";
import sliderimg2 from "../../assets/imgs/sliderimg2.png";
import Slider from "react-slick";
import slider from "../../assets/imgs/slider.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../Container/Container";



function Hero() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Container>
      <div className="hero">
        <div className="hero__slider slider-hero">
          <div className="holder">
            <Slider {...settings}>
              <div className="wrapper">
                <div className="hero__wrapper">
                  <div>
                    <p className="hero__text hero__pt">Welcome to GreenShop</p>
                    <h2 className="hero__title">
                      Let’s Make a Better
                      <span className="hero__span">Planet</span>
                    </h2>
                    <p className="hero__desc">
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants. Use our plants to create an unique
                      Urban Jungle. Order your favorite plants!
                    </p>
                    <button className="hero__btn btn">SHOP NOW</button>
                  </div>
                  <div className="hero__img_div">
                    <img
                      className="slider-hero__img"
                      src={flowers}
                      alt="hero img"
                    />
                  </div>
                </div>
                <div className="hero__slider_div">
                  <img className="hero__slider" src={slider} alt="dot" />
                </div>
              </div>
              <div className="wrapper">
                <div className="hero__wrapper wrapper2">
                  <div>
                    <p className="hero__text">Welcome to GreenShop</p>
                    <h2 className="hero__title">
                    African Violet
                      <span className="hero__span">Planet</span>
                    </h2>
                    <p className="hero__desc">
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants. Use our plants to create an unique
                      Urban Jungle. Order your favorite plants!
                    </p>
                    <button className="hero__btn btn">SHOP NOW</button>
                  </div>
                  <div className="hero__img_div">
                    <img
                      className="slider-hero__img"
                      src={sliderimg}
                      alt="hero img"
                    />
                  </div>
                </div>
                <div className="hero__slider_div">
                  <img className="hero__slider" src={slider} alt="dot" />
                </div>
              </div>
              <div className="wrapper">
                <div className="hero__wrapper wrapper2">  
                  <div>
                    <p className="hero__text">Welcome to GreenShop</p>
                    <h2 className="hero__title">
                    Bird's Nest Fern
                      <span className="hero__span">Planet</span>
                    </h2>
                    <p className="hero__desc">
                      We are an online plant shop offering a wide range of cheap
                      and trendy plants. Use our plants to create an unique
                      Urban Jungle. Order your favorite plants!
                    </p>
                    <button className="hero__btn btn">SHOP NOW</button>
                  </div>
                  <div className="hero__img_div">
                    <img
                      className="slider-hero__img"
                      src={sliderimg2}
                      alt="hero img"
                    />
                  </div>
                </div>
                <div className="hero__slider_div">
                  <img className="hero__slider" src={slider} alt="dot" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
