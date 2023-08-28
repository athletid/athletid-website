import React from 'react'
import Image from 'next/image'
import TimerDashboardBottom from '@/public/assets/images/timer-athletid-dashboard-bottom.webp'

const CardImageTopLeft = () => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col h-[500px] p-4 md:p-8 md:pr-0 md:pt-0 pr-0 pt-0'
            }
        >
            <div
                className={
                    'w-full flex justify-end h-full md:h-[275px] mb-4 md:ml-8 ml-4'
                }
            >
                <div
                    className={
                        'h-full md:h-full md:max-w-full max-w-[350px] lg:max-w-[500px] w-full relative'
                    }
                >
                    <Image
                        className={'md:px-0 object-cover object-left-bottom'}
                        src={TimerDashboardBottom}
                        layout={'fill'}
                        alt={''}
                    />
                </div>
            </div>
            <div className={'flex md:flex-col'}>
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={'flex flex-col items-center'}>
                        <h3 className={'md:text-left font-medium'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <h3 className={'md:text-left text-black/[16%]'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardImageTopLeft;