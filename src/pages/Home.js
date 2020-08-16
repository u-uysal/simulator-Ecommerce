import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Info from "../components/Data";

import image0 from "../assets/image0.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import gif from "../assets/tenor.gif";

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

  // find non-empty array to display certain value

  let noEmptyData = Info.filter((item) => item.old !== undefined);

  // find filtered array according to user wishes

  let filterArray = noEmptyData.filter(
    (item) =>
      (state.team === "" || item.team === state.team) &&
      (state.color === "" || item.color === state.color) &&
      (state.city === "" || item.city === state.city) &&
      (state.gender === "" || item.gender === state.gender)
  );

  // define image array to easily mapping data
  const img = [image0, image1, image2, image3, image4, image5, image6];

  // function find unique value
  const FindUnique = (Info, i) => {
    let itemArray = Info.map((item) => item[i]);
    let UniqueArray = [...new Set(itemArray)];
    return UniqueArray;
  };

  // find unique value to find unique value
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
      <div className="row">
        {/* sidebar is starting */}
        <div
          className="col-sm-3 text-center sidebar sticky-top"
          id="sticky-sidebar"
        >
          <a
            className="filters"
            data-toggle="collapse"
            href="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Team <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse" id="collapseOne">
            <div className="card card-body">
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
            Color <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse" id="collapseTwo">
            <div className="card card-body">
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
            City <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse" id="collapseThree">
            <div className="card card-body">
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
            Gender <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse" id="collapseFour">
            <div className="card card-body">
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
        {/* sidebar  ended */}

        {/* intro section is starting */}

        <div className="col-sm-9 text-center">
          <div className="intro">
            <div className="row">
              <div className="col-sm-4">
                <h3 className="font-weight-bold">Laminaat</h3>
                <p className="text-left">
                  Creëer eenvoudig een natuurlijke sfeer in huis met een
                  laminaat vloer met houtmotief of steenmotief. Je hebt de keuze
                  uit een ruim assortiment. Zo zijn er laminaatvloeren met
                  houtmotief en een voelbare houtstructuur, maar ook dessins met
                  zeer glad leisteen. Deze laminaatvloeren zijn nauwelijks van
                  echt hout of steen te onderscheiden.
                </p>
                <h5 className="text-left font-weight-bold">
                  Het gemak van laminaat
                </h5>
                <ul className="text-left">
                  <li>
                    Keuze uit heel veel verschillende houtdessins en
                    steendessins
                  </li>
                  <li>Creëer een natuurlijke sfeer</li>
                  <li>Eenvoudig te plaatsen</li>
                  <li>Gemakkelijk te onderhouden</li>
                </ul>
              </div>
              <div className="col-sm-7 ml-5 main-image"></div>
              {/* intro section ended */}

              {/* gallery section is starting */}
              <div className="gallery">
                {filterArray.length === 0 ? (
                  <div>
                    <img
                      class="img-fluid rounded"
                      style={{ width: "50vw", height: "40vw" }}
                      src={gif}
                      alt="Chania"
                    />
                    <h3 className="no-match">
                      No matching items were found according to your search
                      criteria.
                    </h3>
                  </div>
                ) : (
                  filterArray.map((item, i) => (
                    <div key={i} className="img-part">
                      <div
                        style={{ backgroundImage: `url(${img[item.id]})` }}
                        className="image-display"
                      ></div>
                      <div className="image-info">
                        <p className="text-uppercase">{item.merken}</p>
                        <div>
                          <span className="text-old">{item.old} &#13217;</span>
                          <span className="text-new">{item.new} &#13217;</span>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mt-3 "
                        >
                          Meer informatie
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
