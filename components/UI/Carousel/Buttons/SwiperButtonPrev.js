import { useSwiper } from "swiper/react";

export const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button className={'w-[56px] h-[56px] lg:w-[80px] lg:h-[80px] border'} onClick={() => swiper.slidePrev()}>{children}</button>;
};