'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import {
  Images,
  YogaImages,
} from '@/components/LandingTimer/ImageCarousel/index'

const Carousel = (props) => {
  return (
    <Marquee autoFill={true} className={'mt-[56px] -space-x-4'}>
      {props.img === 'yoga'
        ? YogaImages.map((value, index) => {
            return (
              <div key={index} className={'w-[300px] h-[300px] relative'}>
                <Image
                  src={value}
                  fill
                  className={'object-cover'}
                  alt={'Jimmy Mabillon'}
                />
              </div>
            )
          })
        : Images.map((value, index) => {
            return (
              <div key={index} className={'w-[300px] h-[300px] relative'}>
                <Image
                  src={value}
                  fill
                  className={'object-cover'}
                  alt={'Jimmy Mabillon'}
                />
              </div>
            )
          })}
    </Marquee>
  )
}

export default Carousel
