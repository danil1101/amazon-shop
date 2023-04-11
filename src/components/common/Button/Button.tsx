import React from "react";
import "./Button.scss";

function Button(props: any) {
  return <button className="button">{props.data}</button>;
}

export default Button;
