import React from "react";
import "./Plants.scss";
import plants from "../../../assets/imgs/plants.png";
import "boxicons";

function Plants(props) {
  return (
    <>
      <ul className="plants__list">
        {props.newArr.map((item) => {
          return (
            <>
              <li className="plants__item" key={item.id}>
                <div className="plants__img_div">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="plants__name_div">
                  <p className="plants__name">{item.name}</p>
                  <span className="plants__price">$ {item.price}</span>
                </div>
                <div className="plants__icons_div">
                  <div className="plants__icons">
                    <button className="plants__icon_btn">
                      <img
                        className="plants__faIcon_img"
                        src={plants}
                        alt="plants"
                      />
                    </button>
                    <button className="plants__icon_btn">
                      <box-icon  name="heart"></box-icon>
                    </button>
                    <button className="plants__icon_btn">
                      <box-icon
                        name="search"
                      ></box-icon>
                    </button>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Plants;
