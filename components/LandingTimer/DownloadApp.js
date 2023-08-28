'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from "clsx";
import {useIsMobile} from "@/components/Hooks/useMediaQuery";

const DownloadApp = (props) => {
    const isMobile = useIsMobile();
    
  return (
    <div className={clsx('md:mt-[25px] max-w-[370px] md:max-w-full mx-auto', props.className)}>
      <div
        className={
          'flex flex-col space-y-[24px]  items-center text-center'
        }
      >
        <div className={''}>{isMobile && props.mobileTitle ? props.mobileTitle:  props.title}</div>
          <div className={'flex md:flex-row flex-col md:space-x-[24px] space-y-[24px] md:space-y-0'}>
              <Link target={"_blank"} href={"https://apps.apple.com/fr/app/timer-by-athletid/id1660216893?l=en"}>
                  <Image
                      src={'/assets/images/download-appstore.webp'}
                      width={168}
                      height={50}
                      unoptimized
                      alt={'Download on App Store'}
                  />
              </Link>
              <Link target={"_blank"} className={'mt-[24px] md:mt-0'} href={"https://play.google.com/store/apps/details?id=com.athletid.timerapp"}>
                  <Image
                      src={'/assets/images/download-googleplay.webp'}
                      width={168}
                      height={50}
                      unoptimized
                      alt={'Download on Google Play'}
                  />
              </Link>
          </div>
      </div>
    </div>
  )
}

export default DownloadApp
