import React, { useState } from "react";
import Info from "./Data";

import RadioTeam from "./RadioTeam";
import RadioColor from "./RadioColor";
export default function Selection() {
  const [state, setState] = useState({
    team: "",
    color: "",
    city: "",
    gender: "",
  });

  let filterArray = Info.filter(
    (item) =>
      (state.team === "" || item.team === state.team) &&
      (state.color === "" || item.color === state.color) &&
      (state.city === "" || item.city === state.city) &&
      (state.gender === "" || item.gender === state.gender)
  );

  let displayArray = filterArray.map((item) => item.id);

  const FindUnique = (Info, i) => {
    let itemArray = Info.map((item) => item[i]);
    let UniqueArray = [...new Set(itemArray)];
    return UniqueArray;
  };

  const uniqueTeam = FindUnique(Info, "team");
  const uniqueColor = FindUnique(Info, "color");
  const uniqueCity = FindUnique(Info, "city");
  const uniqueGender = FindUnique(Info, "gender");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <>
      {uniqueTeam.map((key, i) => (
        <RadioTeam
          key={i}
          value={key}
          checked={state.team === key}
          onChange={handleChange}
        />
      ))}

      {uniqueColor.map((key, i) => (
        <RadioColor
          key={i}
          value={key}
          checked={state.color === key}
          onChange={handleChange}
        />
      ))}

      <p>
        {state.team}-{state.color}
      </p>
      <p>{displayArray}</p>
    </>
  );
}
