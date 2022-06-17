import React from "react";
import "./Type.scss";

export default function Type(props) {
  
  const typeHandler = (e) => {
    let btnValue = e.target.textContent;
    if (btnValue === "All") {
      props.setNewArr(props.data);
    } else if (e.target.id === "New Arrivals") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.type === e.target.id;
        })
      );
    } else if (e.target.id === "Sale") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.type === e.target.id;
        })
      );
    }
  };

  return (
    <li className="type__container">
      <button className="type__btn" onClick={typeHandler} id={props.id}>
        {props.item}
      </button>
    </li>
  );
}
