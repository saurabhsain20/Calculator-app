import React from "react";
import "./Button.css";

function Button(props) {
  const isOperator = (value) => {
    return !isNaN(value) || value === "." || value === "=";
  };

  return (
    <div
      id={props.id}
      className={
        props.isLight
          ? `btn-container-light ${
              isOperator(props.children) ? null : "btn-operator"
            }`
          : `btn-container-dark ${
              isOperator(props.children) ? null : "btn-operator"
            }`
      }
      onClick={(event) => {
        const id = event.target.id;
        if (id === "clear") {
          props.handleClear();
        } else {
          props.handleClick(props.children);
        }
      }}
    >
      {props.children}
    </div>
  );
}

export default Button;
