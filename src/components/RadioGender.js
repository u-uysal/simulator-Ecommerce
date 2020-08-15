import React from "react";

export default function RadioGender(props) {
  return (
    <label>
      <input
        type="radio"
        name="gender"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />{" "}
      {props.value ? props.value : "Default"}
    </label>
  );
}
