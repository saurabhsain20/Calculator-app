import React from "react";
import "./InputField.css";

function InputField(props) {
  return (
    <div className={props.isLight ? "inputField-light" : "inputField-dark"}>
      {props.input}
    </div>
  );
}

export default InputField;
