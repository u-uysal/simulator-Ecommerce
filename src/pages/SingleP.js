import React from "react";

import Info from "../components/Data";

export default function SingleP({ match }) {
  const specificItem = Info.filter((item) => item.id == match.params.slug);

  return (
    <div className="single-page">
      <div className="single-page-img">
        <img src={specificItem[0].src} />
      </div>
      <div className="single-page-info">
        <p className="image-merken">
          {specificItem[0].merken.toLocaleUpperCase()}
        </p>
        <p className="image-price">{specificItem[0].new}</p>
        <div className="product-order">
          <button type="button" class="btn btn-secondary p-3">
            Order Product Sample
          </button>
        </div>
      </div>
    </div>
  );
}
