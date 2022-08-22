import CardsRender from './Cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Carrousel() {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={5}
            slidesPerView={"auto"}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
            <SwiperSlide><CardsRender /></SwiperSlide>
            <SwiperSlide><CardsRender /></SwiperSlide>
            <SwiperSlide><CardsRender /></SwiperSlide>
            <SwiperSlide><CardsRender /></SwiperSlide>
            <SwiperSlide><CardsRender /></SwiperSlide>
        </Swiper>
    );
};
