import Image from 'next/image'
import React from 'react'

export default function CarouselSlide(props) {

    return (
        <Image
            src={props.image}
            fill
            className={`object-cover ${props.imagePosition}`}
            alt={''}
            sizes={"100vw"}
        />
    )
}