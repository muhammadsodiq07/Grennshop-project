import React from "react";
import "./Categories.scss"

export default function Caterories(props) {
  
  const typeHandler = (e) => {
    let btnValue = e.target.textContent;
    if (btnValue === "House Plants") {
      props.setNewArr(props.data);
    } else if (e.target.id === "Potter Plants") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );
    } else if (e.target.id === "Seeds") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Small Plants") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Big Plants") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Succulents") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Trerrariums") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Gardening") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
    else if (e.target.id === "Accessories") {
      props.setNewArr(
        props.data.filter((item) => {
          return item.categories === e.target.id;
        })
      );  
    }
  };

  return (
    <li className="type__container">
      <button className="categories__btn" onClick={typeHandler} id={props.id}>
        {props.item}
        <span>
          25
        </span>
      </button>
    </li>
  );
}
