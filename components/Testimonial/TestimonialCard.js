import React from 'react'
import {IoStar} from 'react-icons/io5'
import Image from 'next/image'

const TestimonialCard = (props) => {
    return (
        <div className={`h-[350px] md:h-[280px] relative`}>
            <div
                className={`p-8 bg-white rounded-medium flex flex-col justify-center items-center ${props.zoom} transition duration-1000 aspect-square absolute transform -translate-y-1/2 top-1/2 w-full max-w-[280px]`}
            >
                <Image src={props.image} width={110} height={110} alt={''}/>
                <p
                    className={
                        'font-semibold md:text-[24px] text-[16px] md:leading-[28px] leading-[20px] mb-[5px]'
                    }
                >
                    {props.name}
                </p>
                <div className={'flex items-center space-x-2 text-[#D86A59]'}>
                    <IoStar className={'text-[#D86A59] text-xl'}/>
                    <p className={'font-semibold'}>{props.star}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;
