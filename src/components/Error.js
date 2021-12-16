import React from "react";

export default function Error(props) {
  const wrong =
    "The searched country doesn't exist! Please search a valid country...";
  const net =
    "Failed to load! Please check your internet connection and try again...";
  return (
    <div className="error">
      <p>{props.error === "wrong" ? wrong : net}</p>
    </div>
  );
}
