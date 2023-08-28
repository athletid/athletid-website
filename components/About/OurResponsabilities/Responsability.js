import React from 'react'
import Image from 'next/image'

const Responsability = (props) => {
    return (
        <div className="flex md:flex-col lg:flex-row w-full space-x-4 md:space-x-0 lg:space-x-4 items-start md:items-center lg:items-start py-8 md:py-0 border-b border-black/6 md:border-none">
            <Image
                src={props.icon}
                alt={''}
                height={40}
                width={40}
                sizes={"10vw"}
                className={'mt-2 md:mb-4 lg:mt-2'}
            />
            <div className={'flex flex-col'}>
        <span
            className={
                'whitespace-pre-line !font-[400] md:text-center lg:text-left md:text-3xl lg:text-[38px] lg:leading-[42px] mb-[20px]'
            }
        >
          {props.title}
        </span>
                <p
                    style={{
                        whiteSpace: 'pre-line',
                        textAlign: 'justify',
                        textJustify: 'auto',
                    }}
                    className={'text-center'}
                >
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}

export default Responsability;