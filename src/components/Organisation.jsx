import React from "react";
import { ImageSliders } from "./Common";
import { GenUniqueKey } from "./Common";

const OrgSliders = () => {
  const images = [
    "../assets/org/1.jpg",
    "../assets/org/2.jpg",
    "../assets/org/3.jpg",
    "../assets/org/4.jpg",
    "../assets/org/5.jpg",
  ];
  const breakpoints = {
    1:{// after 1 px 
        slidesPerView:1
    },
    200:{ // after 200 px 
        slidesPerView:2
    },
    680:{ // after 680 px 
        slidesPerView:4
    },
  }
  return (
    <section className="container-fluid py-2 persian-font">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-10 my-2">
          <ImageSliders
            navigation={false}
            slidesPerView={4}
            images={images}
            imgHeight={"25%"}
            key={GenUniqueKey()}
            type=""
            breakpoints={breakpoints}
          />
        </div>
      </div>
    </section>
  );
};


export { OrgSliders };
