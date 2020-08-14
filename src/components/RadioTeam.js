import React from "react";

export default function RadioTeam(props) {
  return (
    <label>
      <input
        type="radio"
        name="team"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />{" "}
      {props.value}
    </label>
  );
}
