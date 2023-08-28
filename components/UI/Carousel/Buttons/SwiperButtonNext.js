import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className={'w-[56px] h-[56px] lg:w-[80px] lg:h-[80px] border'} onClick={() => swiper.slideNext()}>{children}</button>;
};