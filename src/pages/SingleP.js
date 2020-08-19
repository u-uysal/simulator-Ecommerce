import React from "react";

import Info from "../components/Data";

export default function SingleP({ match }) {
  const specificItem = Info.filter((item) => item.id == match.params.slug);

  return (
    <div className="single-page">
      <div>
        <div class="row">
          <div class="col-md-7 ">
            {" "}
            <div className="single-image">
              <img src={specificItem[0].src} />
            </div>
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
