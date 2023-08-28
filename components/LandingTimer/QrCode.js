import React from 'react'
import Image from 'next/image'
import QR from '@/public/assets/images/LandingTimer/qrcode.webp'

const QrCode = () => {
  return (
    <div className={'absolute top-0 right-0 bg-black rounded-full'}>
      <div className={'relative h-[140px] w-[140px]'}>
        <div
          className={' absolute bg-black rounded-full'}
        ></div>
          <div>
              Download app
          </div>
        <Image
          src={QR}
          alt={'Download Timer App'}
          className={'absolute z-10 transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'}
          width={90}
          height={90}
        />

      </div>
    </div>
  )
}

export default QrCode
