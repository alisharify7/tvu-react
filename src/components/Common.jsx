// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const GenUniqueKey = () => {
  /**
   * return unique identifier for each react component
   * @return uuid4
   */
  // log && debugging
  const l = v4();
  return l;
};

const ImageSliders = ({
  imgHeight = null,
  imgWidth = "100%",
  images = [],
  slidesPerView = 1,
  navigation = true,
  breakpoints = {},
  type = "progressbar",
  spaceBetween = 30,
  children,
}) => {
  let default_images = [
    "/assets/slider/1.jpg",
    "/assets/slider/2.jpg",
    "/assets/slider/3.jpg",
    "/assets/slider/4.jpg",
    "/assets/slider/5.jpg",
  ];



  images = images.length > 0 ? images : default_images;

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        key={GenUniqueKey()}
        centeredSlides={false}
        pagination={{
          type: type,
          clickable: true,
        }}
        navigation={navigation}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/** 
      * create sliders base on input images
      
      */}
        {images.map((imgPath) => {
          return (
            <SwiperSlide key={GenUniqueKey()}>
              <a href="#" className="text-decoration-none" style={{ height: "100%" }}>
                <img
                  className={ imgHeight ? imgHeight : 'h460' }
                  src={imgPath}
                  alt="fake image"
                  style={{ width: imgWidth }}
                />
                {children}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export { ImageSliders, GenUniqueKey };
