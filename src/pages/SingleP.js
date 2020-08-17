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
      <div className="image-container">
        <div
          className="single-image"
          style={{ backgroundImage: `url(${img[match.params.slug]})` }}
        ></div>
        <div className="single-image-info">
          <h1 className="single-image-header mb-4">{specificItem[0].merken}</h1>
          <div>
            <span className="single-image-old">{specificItem[0].old} </span>
            &#13217;
            <span className="single-image-new">{specificItem[0].new} </span>
            &#13217;
          </div>
        </div>
      </div>
    </div>
  );
}
