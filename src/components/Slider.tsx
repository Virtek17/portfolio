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

import fkChelDesktop from "../assets/fkChel-desktop.png";
import fkChelMobile from "../assets/fkChel-mobile.png";

import termirraDesktop from "../assets/termirra-desktop.png";
import termirraMobile from "../assets/termirra-mobile.png";

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
          <img className="frame-slide__image--pc" src={carvetDesktop} alt="" />
          <img
            className="frame-slide__image--mobile"
            src={carvetMobile}
            alt=""
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
          <img className="frame-slide__image--pc" src={basketDesktop} alt="" />
          <img
            className="frame-slide__image--mobile"
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
          <img
            className="frame-slide__image--pc"
            src={livingtreeDesktop}
            alt=""
          />
          <img
            className="frame-slide__image--mobile"
            src={livingtreeMobile}
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
          <img className="frame-slide__image--pc" src={bargerDesktop} alt="" />
          <img
            className="frame-slide__image--mobile"
            src={bargerMobile}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">ФК Челябинск</div>
        <div className="frame-slide__content">
          <img className="frame-slide__image--pc" src={fkChelDesktop} alt="" />
          <img
            className="frame-slide__image--mobile"
            src={fkChelMobile}
            alt=""
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="frame-slide">
        <div className="frame-slide__block-1 frame-slide__block"></div>
        <div className="frame-slide__block-2 frame-slide__block"></div>
        <div className="frame-slide__block-3 frame-slide__block"></div>
        <div className="frame-slide__block-4 frame-slide__block"></div>
        <div className="frame-slide__name">Термирра</div>
        <div className="frame-slide__content">
          <img
            className="frame-slide__image--pc"
            src={termirraDesktop}
            alt=""
          />
          <img
            className="frame-slide__image--mobile"
            src={termirraMobile}
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
          <img className="frame-slide__image--lc" src={learnCode} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
