import Image from "next/image";
import React from "react";

export default function CarouselSlide({className, ...props }) {
  const { title, description, image } = props

  return (
    <div className={'md:grid md:grid-cols-[1fr_370px] items-center justify-between md:w-3/4 mx-auto relative'}>
      <div className={'relative rounded-medium overflow-hidden h-[370px] md:w-[370px] w-auto md:order-last bg-[#F2F2F2]'}>
        <Image
          src={image}
          fill
          className={'object-cover object-top w-auto'}
          alt={''}
          sizes={"33vw"}
        />
      </div>
      <div className={'space-y-4 md:space-y-8 flex flex-col md:justify-center md:h-full mt-8 md:mt-0'}>
        <p className={'text-center md:text-left w-full md:mx-auto whitespace-pre-line text-[42px] leading-[42px] lg:text-[54px] lg:leading-[54px]'}>{title}</p>
        <p className={'text-black w-full  text-center md:text-left md:mx-auto whitespace-pre-line'}>{description}</p>
      </div>
    </div>
  )
}