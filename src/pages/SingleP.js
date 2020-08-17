import React from "react";

import Info from "../components/Data";

import image0 from "../assets/image0.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

export default function SingleP({ match }) {
  // define image array to easily mapping data
  const img = [image0, image1, image2, image3, image4, image5, image6];
  console.log(match.params.slug);

  const specificItem = Info.filter((item) => item.id == match.params.slug);
  console.log(specificItem[0].old);
  return (
    <div className="single-page">
      <div>
        <div class="row">
          <div class="col-md-7 ">
            {" "}
            <div
              className="single-image"
              style={{ backgroundImage: `url(${img[match.params.slug]})` }}
            ></div>
          </div>
          <div class="col-md-5">
            <div className="single-image-info">
              <div class="container">
                <h2 className="merk-name">{specificItem[0].merken}</h2>
                <br />

                <ul class="nav nav-pills" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="pill" href="#menu1">
                      Productomschrijving
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#menu2">
                      Specificaties
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div id="menu1" class="container tab-pane active">
                    <br />
                    <div className="mb-4">
                      <span className="text-info-old">
                        {specificItem[0].old}&#13217;
                      </span>
                      <span className="text-info-new">
                        {specificItem[0].new}&#13217;
                      </span>
                    </div>
                    <p className="text-exp">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="sell-button">
                      <button type="button" class="btn btn-secondary btn-lg">
                        Bestel Productstalen
                      </button>
                    </div>
                  </div>
                  <div id="menu2" class="container tab-pane fade">
                    <div class="container">
                      <table class="table mt-5">
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                          </tr>
                          <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                          </tr>
                          <tr>
                            <td>July</td>
                            <td>Dooley</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
