import "../index.css";
import livingtreeMobile from "../assets/livingtree-mobile.png";
import livingtreeDesktop from "../assets/livingtree-desktop.png";
import carvetDesktop from "../assets/carvet-desktop.png";
import carvetMobile from "../assets/carvet-mobile.png";
import bargerDesktop from "../assets/barger-desktop.png";
import bargerMobile from "../assets/barger-mobile.png";
import basketDesktop from "../assets/basket-desktop.png";
import basketMobile from "../assets/basket-mobile.png";
import learnCode from "../assets/learnCode.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper frame-slider"
    >
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Carvet</div>
        <div className="frame-slide__content">
          <img className="frame-slide__image" src={carvetDesktop} alt="" />
          <img
            className="frame-slide__image"
            src={carvetMobile}
            alt=""
            style={{ transform: "translateY(20%)", maxWidth: "200px" }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Челбаскет</div>
        <div className="frame-slide__content">
          <img className="frame-slide__image" src={basketDesktop} alt="" />
          <img
            className="frame-slide__image mobile"
            style={{ transform: "translateY(20%)", maxWidth: "200px" }}
            src={basketMobile}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Livingtree</div>
        <div className="frame-slide__content">
          <img className="frame-slide__image" src={livingtreeDesktop} alt="" />
          <img
            className="frame-slide__image mobile"
            src={livingtreeMobile}
            style={{ transform: "translateY(20%)", maxWidth: "200px" }}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Barger</div>
        <div className="frame-slide__content">
          <img className="frame-slide__image" src={bargerDesktop} alt="" />
          <img
            className="frame-slide__image mobile"
            src={bargerMobile}
            style={{ transform: "translateY(20%)", maxWidth: "200px" }}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Learn Code</div>
        <div className="frame-slide__content">
          <img
            className="frame-slide__image"
            style={{ transform: "none", maxWidth: "400px" }}
            src={learnCode}
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
