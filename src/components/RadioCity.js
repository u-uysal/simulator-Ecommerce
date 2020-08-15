import React from "react";

export default function RadioCity(props) {
  return (
    <label>
      <input
        type="radio"
        name="city"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />{" "}
      {props.value ? props.value : "Default"}
    </label>
  );
}
