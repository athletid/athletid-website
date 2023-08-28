'use client'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import TestimonialCardData from './TestimonialCardData'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const Testimonial = (props) => {

    return (
        <div className={'mt-[92px] md:mt-[120px] md:px-4 md:max-w-[1170px] mx-auto  '}>
            <div
                className={
                    'flex flex-col items-center mx-auto mb-[72px] text-center max-w-[350px] md:max-w-full  mx-auto'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={'w-full relative  mx-auto '}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    className={'w-[150%] transform left-[-25%] md:left-0 md:max-w-[770px] md:mx-auto'}
                    spaceBetween={60}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    autoplay={{delay: 2000}}
                    speed={1000}
                    loop={true}
                    loopPreventsSliding={true}
                >
                    {TestimonialCardData.slice(0, 12).map((val, ind) => {
                        return (
                            <SwiperSlide className={''} key={ind}>
                                {({isNext}) => (
                                    <TestimonialCard
                                        image={val.image}
                                        name={val.name}
                                        surname={val.surname}
                                        publicationDate={val.publicationDate}
                                        title={val.title}
                                        zoom={isNext ? ' scale-125' : 'scale-100'}
                                        comment={val.comment}
                                        star={val.star}
                                    />
                                )}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial;
