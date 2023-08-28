import React from 'react'
import Image from 'next/image'
import AthletidFounders from '@/public/assets/images/fondateurs-athletid.webp'
import {useTranslations} from "next-intl";

const CoFounderCitation = () => {

    const  t  = useTranslations('about')

    return (
      <div
        className={
          'mt-[72px] md:mt-[126px] flex flex-col md:grid md:grid-cols-2 md:gap-[30px] space-y-8 md:space-y-0'
        }
      >
        <span
          className={
            '!font-[400] md:order-last md:!text-[28px] md:!leading-[28px] lg:!text-[44px] lg:!leading-[44px]'
          }
        >
          {t('coFounderCitation.citation')}
        </span>
        <div className={'flex space-x-3 items-center md:items-start'}>
          <Image
            src={AthletidFounders}
            height={50}
            width={50}
            alt={''}
            sizes={'10vw'}
            className={'rounded-full '}
          />
          <div>
            <p className={'font-bold'}>Jimmy & Julien</p>
            <p>{t('coFounderCitation.roles')}</p>
          </div>
        </div>
      </div>
    )
}

export default CoFounderCitation
