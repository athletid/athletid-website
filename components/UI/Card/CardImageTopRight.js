'use client'
import React from 'react'
import Image from 'next/image'
import TimerDashboardBottom from '@/public/assets/images/timer-athletid-dashboard-bottom.webp'

const CardImageTopRight = (props) => {
  return (
    <div
      className={
        'rounded-medium overflow-hidden bg-greyShade  flex flex-col h-[500px] md:h-[420px] md:pr-0 md:pt-0 pr-0 pt-0 relative'
      }
    >
      <div className={'w-full h-[400px] relative'}>
        <Image
          className={
            'object-cover md:object-contain object-center md:object-top'
          }
          src={TimerDashboardBottom}
          alt={''}
        />
      </div>
      <div className={'flex md:flex-col absolute left-4 bottom-4'}>
        <div className={'space-y-4 flex flex-col md:justify-between '}>
          <div className={'flex flex-col items-center'}>
            <span
              className={
                'md:text-left font-medium w-full lg:text-[30px] lg:leading-[34px]'
              }
            >
              {props.title}
            </span>
            <span
              className={
                'md:text-left text-black/[16%] w-full lg:text-[30px] lg:leading-[34px] whitespace-pre-line'
              }
            >
              {props.subTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardImageTopRight
