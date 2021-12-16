import React from "react";

export default function Loader(props) {
  return (
    <div className="spinner">
      <span>
        <b>Loading</b>
      </span>
      <div className="half-spinner"></div>
    </div>
  );
}
