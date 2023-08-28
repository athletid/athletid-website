'use client'
import React from 'react'
import Image from 'next/image'
import Subscription from "@/components/Feature/Subscription";

const Feature = (props) => {

    return (
        <div
            className={
                'mt-[92px] md:mt-[120px] md:grid md:grid-cols-[1fr_340px] md:items-center'
            }
        >
            <div
                className={
                    'flex flex-col text-left space-y-8 lg:mx-auto pr-[27px]'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
                <p className={'w-full mt-4 mb-6 whitespace-pre-line'}>{props.subTitle}</p>
                <div className={'flex flex-col'}>
                    <p className={'font-medium text-xl mb-4'}>{props.titleFeatures}</p>
                    {props.subscriptions.map((value, index) => {
                        return (
                            <Subscription
                                key={index}
                                subscriptionTitle={value.subscriptionTitle}
                                subscriptionType={value.subscriptionType}
                            />
                        )
                    })}
                </div>
            </div>
            <Image
                src={props.imageSrc}
                width={340}
                height={340}
                sizes={"50vw"}
                className={'mx-auto rounded-medium bg-[#F2F2F2] mt-8'}
                alt="Application Athletid Dashboard Full"
            />
        </div>
    )
}

export default Feature;