'use client'
import React from 'react'
import Button from '../UI/Button/Button'
import Image from 'next/image'
import StatistiquesApplication from '@/public/assets/images/statistiques-application-athletid.webp'
import {useTranslations} from "next-intl";

const ContactSupport = (props, ref) => {

    const  t  = useTranslations('home')

    return (
        <div
            className={
                'lg:duration-[2000ms] lg:opacity-1 grid md:grid-cols-2 grid-cols-1 overflow-hidden mt-[92px] md:mt-[120px]'
            }
        >
            <div
                className={
                    ' flex flex-col justify-center md:items-start items-center md:mt-6 lg:mb-0 mb-6 order-2 md:order-1 md:w-full'
                }
            >
                <h2
                    style={{whiteSpace: 'pre-line'}}
                    className={' md:text-left text-center'}
                >
                    {props.title}
                </h2>
                <p className={'mt-3 mb-6 md:text-left text-center'}>
                    {props.subTitle}
                </p>
                <div className={'flex items-center space-x-4'}>
                    <Button
                        variant={'black'}
                        content={t("buttons.contact")}
                        link={'mailto:contact@athletid.com'}
                    />
                </div>
            </div>
            <div className={'order-2 md:mb-0 mb-4'}>
                <Image
                    alt={
                        "Différentes étapes de construction de l'application Athletid Network"
                    }
                    className={'self-end lg:w-[80%] w-full mx-auto'}
                    sizes={'50vw'}
                    src={StatistiquesApplication}
                />
            </div>
        </div>
    )
}

export default ContactSupport;
