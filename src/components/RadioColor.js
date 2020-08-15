import React from "react";

export default function RadioColor(props) {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name="color"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />{" "}
      {props.value ? props.value : "Default"}
    </label>
  );
}
