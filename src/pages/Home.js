import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Info from "../components/Data";

import RadioTeam from "../components/RadioTeam";
import RadioColor from "../components/RadioColor";
import RadioCity from "../components/RadioCity";
import RadioGender from "../components/RadioGender";

export default function Home() {
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
    <div className="row">
      <div className="col-sm-3 text-center sidebar">
        <a
          className="filters"
          data-toggle="collapse"
          href="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Team <i class="fas fa-arrow-circle-down ml-2"></i>
        </a>
        <div class="collapse" id="collapseOne">
          <div class="card card-body">
            {" "}
            {uniqueTeam.map((key, i) => (
              <RadioTeam
                key={i}
                value={key}
                checked={state.team === key}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <hr></hr>
        <a
          className="filters"
          data-toggle="collapse"
          href="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Color <i class="fas fa-arrow-circle-down ml-2"></i>
        </a>
        <div class="collapse" id="collapseTwo">
          <div class="card card-body">
            {uniqueColor.map((key, i) => (
              <RadioColor
                key={i}
                value={key}
                checked={state.color === key}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <hr></hr>
        <a
          className="filters"
          data-toggle="collapse"
          href="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          City <i class="fas fa-arrow-circle-down ml-2"></i>
        </a>
        <div class="collapse" id="collapseThree">
          <div class="card card-body">
            {uniqueCity.map((key, i) => (
              <RadioCity
                key={i}
                value={key}
                checked={state.city === key}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <hr></hr>
        <a
          className="filters"
          data-toggle="collapse"
          href="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          Gender <i class="fas fa-arrow-circle-down ml-2"></i>
        </a>
        <div class="collapse" id="collapseFour">
          <div class="card card-body">
            {" "}
            {uniqueGender.map((key, i) => (
              <RadioGender
                key={i}
                value={key}
                checked={state.gender === key}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="col-sm-9 text-center">Content</div>
    </div>
  );
}
