import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Info from "../components/Data";

import { Link } from "react-router-dom";

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
  const [sort, setSort] = useState([]);
  const [query, setQuery] = useState("");
  const handlePriceChange = (event) => {
    setSort(event.target.value);
  };

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
  /* const img = [image0, image1, image2, image3, image4, image5, image6]; */

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

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery();
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // copy filter element to prevent change all array

  // sort by price

  let highestArray = [...filterArray].sort(
    (a, b) => parseFloat(b.new) - parseFloat(a.new)
  );
  let lowestArray = [...highestArray].reverse();

  let displayArray =
    sort.length === 0
      ? filterArray
      : sort == "lowest"
      ? lowestArray
      : sort == "highest"
      ? highestArray
      : "";

  // filter image based on search filter

  /*  let displayArray = arrayOfOption.filter((item) => {
    return item.merken.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }); */
  return (
    <>
      <div className="container-header ">
        {/* sidebar is starting */}
        <div className="sidebar">
          <a
            className="filters"
            data-toggle="collapse"
            href="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Team <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse " id="collapseOne">
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

          <a
            className="filters"
            data-toggle="collapse"
            href="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Color <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse " id="collapseTwo">
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

          <a
            className="filters"
            data-toggle="collapse"
            href="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            City <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse " id="collapseThree">
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

          <a
            className="filters"
            data-toggle="collapse"
            href="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Gender <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="collapse " id="collapseFour">
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
        </div>
        {/* sidebar  ended */}

        {/* intro section is starting */}

        <div className="content-sec">
          <div className="flex-container">
            <div className="text-content">
              <h3 className="font-weight-bold">Laminaat</h3>
              <p className="text-left">
                Creëer eenvoudig een natuurlijke sfeer in huis met een laminaat
                vloer met houtmotief of steenmotief. Je hebt de keuze uit een
                ruim assortiment. Zo zijn er laminaatvloeren met houtmotief en
                een voelbare houtstructuur, maar ook dessins met zeer glad
                leisteen. Deze laminaatvloeren zijn nauwelijks van echt hout of
                steen te onderscheiden.
              </p>
              <h5 className="text-left font-weight-bold">
                Het gemak van laminaat
              </h5>
              <ul className="text-left">
                <li>
                  Keuze uit heel veel verschillende houtdessins en steendessins
                </li>
                <li>Creëer een natuurlijke sfeer</li>
                <li>Eenvoudig te plaatsen</li>
                <li>Gemakkelijk te onderhouden</li>
              </ul>
            </div>
            <div className="main-image"></div>
          </div>
          {/* intro section ended */}
          <div className="form-area">
            <div class="row">
              <div class="col-sm-6">
                {" "}
                <div class="form-group">
                  <select
                    class="form-control"
                    value={sort}
                    onChange={handlePriceChange}
                  >
                    <option value="">Sort By Price</option>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    value={query}
                    name="search"
                    class="form-control"
                    onChange={queryHandler}
                    placeholder="Search your desire product here"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* gallery section is starting */}
          <div className="gallery">
            {displayArray.length === 0 ? (
              <div>
                <img
                  class="img-fluid rounded"
                  style={{ width: "50vw", height: "40vw" }}
                  src="/images/tenor.gif"
                  alt="Chania"
                />
                <h3 className="no-match">
                  No matching items were found according to your search
                  criteria.
                </h3>
              </div>
            ) : (
              displayArray.map((item, i) => (
                <div key={i} className="img-part">
                  <div>
                    <img
                      src={item.src}
                      alt={item.merken}
                      style={{ width: "300px", height: "300px" }}
                    />
                    <p className="text-uppercase text-center mt-4">
                      {item.merken}
                    </p>

                    <div className="d-flex price">
                      <span className="text-new">{item.new} &#13217;</span>
                    </div>
                    <div className="text-center mb-2">
                      <Link to={`/${item.id}`}>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mt-3 "
                        >
                          Meer informatie
                        </button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
