import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../../Container/Container";
import "./Pagnition.scss";

function Pagnition({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  
  return (
    <Container>
      <div className="pagination__main">
        <div className="pagination__null">
        </div>
      <nav className="pagination__nav">
        <ul className="pagination">
          {pageNumber.map((number) => {
            return (
              <li className="page-item" key={number}>
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      </div>
    </Container>
  );
}

export default Pagnition;
