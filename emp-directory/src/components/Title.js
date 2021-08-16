import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title mt-5">{props.children}</h1>;
}

export default Title;