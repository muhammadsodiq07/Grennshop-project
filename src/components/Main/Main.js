import React from "react";
import "./Main.scss";
import superBannere from "../../assets/imgs/Super Sale Banner (2).png";
import Container from "../../Container/Container";
import Caterories from "./Categories/Categories";
import Plants from "./Plants/Plants";
import Type from "./Type/Type";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function Main(props) {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let categoryArr = ["All Plants", "New Arrivals", "Sale"];
  let typeArr = ["All Plants", "New Arrivals", "Sale"];

  let categoryArr2 = [
    "House Plants",
    "Potter Plants",
    "Seeds",
    "Small Plants",
    "Big Plants",
    "Succulents",
    "Trerrariums",
    "Gardening",
    "Accessories",
  ];
  let typeArr2 = [
    "House Plants",
    "Potter Plants",
    "Seeds",
    "Small Plants",
    "Big Plants",
    "Succulents",
    "Trerrariums",
    "Gardening",
    "Accessories",
  ];

  return (
    <Container>
      <div className="main">
        <div className="main__categories">
          <h2 className="main__price_range">Categories</h2>
          {categoryArr2.map((item, index) => {
            return (
              <Caterories
                key={index}
                item={item}
                data={props.data}
                id={typeArr2[index]}
                newArr={props.newArr}
                setNewArr={props.setNewArr}
              />
            );
          })}
          <div className="main__prive_rangeDiv">
            <h2 className="main__price_range">Price Range</h2>
            <div>
              <Box sx={{ width: 200, color: "danger" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <p className="main__range_text">
                Price
                <span className="main__span_price">
                  :<span>$39</span>- $1230
                </span>
              </p>
              <button className="btn main__btn_filter">Filter</button>
            </div>
            <div className="main__size_div">
              <h2 className="main__price_range">Size</h2>
              <ul className="main__size">
                <li className="main__size_item">
                  <p className="main__small">Small</p>
                  <span>(119)</span>
                </li>
                <li className="main__size_item">
                  <p className="main__small">Meduim</p>
                  <span>(86)</span>
                </li>
                <li className="main__size_item">
                  <p className="main__small">Large</p>
                  <span>(78)</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="main__banner_div">
                <img
                  className="main__banner_img"
                  src={superBannere}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main__type_btn">
            {categoryArr.map((item, index) => {
              return (
                <Type
                  key={index}
                  item={item}
                  data={props.data}
                  id={typeArr[index]}
                  newArr={props.newArr}
                  setNewArr={props.setNewArr}
                />
              );
            })}
          </div>
          <div>
            <Plants newArr={props.newArr} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
