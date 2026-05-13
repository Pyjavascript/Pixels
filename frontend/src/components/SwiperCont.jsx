import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import CardA from "./Swipers/CardA";
import CardB from "./Swipers/CardB";
import CardC from "./Swipers/CardC";

const SwiperCont = () => {
  const cards = [CardA, CardB, CardC];

  return (
    <div className="w-[279.41px] mx-auto pb-[60px] overflow-hidden">
      <Swiper
        modules={[Pagination]}
        className="!overflow-visible"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {cards.map((Card, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCont;
