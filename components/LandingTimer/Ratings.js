import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import TimerUser1 from '@/public/assets/images/timer-user-1.png'
import TimerUser2 from '@/public/assets/images/timer-user-2.png'
import TimerUser3 from '@/public/assets/images/timer-user-3.png'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import clsx from 'clsx'
import { useIsMobile } from '@/components/Hooks/useMediaQuery'

const Ratings = (props) => {
  const isMobile = useIsMobile()
  return (
    <div
      className={clsx(
        'flex flex-col space-y-[24px] items-center text-center mt-[20px] md:mt-[32px]',
        props.className
      )}
    >
      <div className={'flex space-x-[20px]'}>
        <div className={'flex flex-col text-left'}>
          <span>2k +</span>
          <p>installs around <br/>the world</p>
        </div>
        {!isMobile && (
          <Link
            href={'#reviews'}
            className={'bg-black rounded-full w-[190px] h-[60px] relative '}
          >
            <div className={' p-[6px] flex justify-between'}>
              <div className={'flex -space-x-6'}>
                <div
                  className={
                    'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                  }
                >
                  <Image
                    src={TimerUser1}
                    fill
                    className={'object-cover object-left'}
                    alt={'User of timer'}
                  />
                </div>{' '}
                <div
                  className={
                    'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                  }
                >
                  <Image
                    src={TimerUser2}
                    fill
                    className={'object-cover '}
                    alt={'User of timer'}
                  />
                </div>
                <div
                  className={
                    'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                  }
                >
                  <Image
                    src={TimerUser3}
                    fill
                    className={'object-cover'}
                    alt={'User of timer'}
                  />
                </div>
              </div>
              <div
                className={
                  'bg-timeRed rounded-full h-[50px] w-[50px] flex justify-center items-center'
                }
              >
                <HiOutlineArrowLongRight width={23} height={2} />
              </div>
            </div>
          </Link>
        )}
        <div className={'flex flex-col'}>
          <div className={'flex space-x-2 items-center'}>
            <span>5</span>
            <BsStarFill height={23} width={23} color={'black'} />
          </div>
          <p>average rating</p>
        </div>
      </div>
      {isMobile && (
        <Link
          href={'#'}
          className={'bg-black rounded-full w-[190px] h-[60px] relative '}
        >
          <div className={' p-[6px] flex justify-between'}>
            <div className={'flex -space-x-6'}>
              <div
                className={
                  'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                }
              >
                <Image
                  src={TimerUser1}
                  fill
                  className={'object-cover object-left'}
                  alt={'User of timer'}
                />
              </div>{' '}
              <div
                className={
                  'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                }
              >
                <Image
                  src={TimerUser2}
                  fill
                  className={'object-cover '}
                  alt={'User of timer'}
                />
              </div>
              <div
                className={
                  'h-[50px] w-[50px] border border-white rounded-full overflow-hidden relative'
                }
              >
                <Image
                  src={TimerUser3}
                  fill
                  className={'object-cover'}
                  alt={'User of timer'}
                />
              </div>
            </div>
            <div
              className={
                'bg-timeRed rounded-full h-[50px] w-[50px] flex justify-center items-center'
              }
            >
              <HiOutlineArrowLongRight width={23} height={2} />
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Ratings
