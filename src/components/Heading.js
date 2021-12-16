import React from "react";

export default function Heading(props) {
  return (
    <div>
      <div className="earth">
        <img src={props.earth} />
      </div>
      <div className="title">
        <h1>Countries</h1>
      </div>
    </div>
  );
}
