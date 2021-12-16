import React, { useState } from "react";

function Countries(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flag" src={props.flag} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h2 className="name">{props.name}</h2>
          <p>
            <b>Capital:</b> {props.capital}
          </p>
          <p>
            <b>Continent:</b> {props.cont}
          </p>
          <p>
            <b>Population:</b> {props.popl}
          </p>
          <p>
            <b>Currency:</b> {props.currency}
            <span>{props.symbol !== "NA" && " (" + props.symbol + ")"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Countries;
