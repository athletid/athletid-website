import React from 'react'
import Button from '@/components/UI/Button/Button'
import {useTranslations} from "next-intl";

const JoinTeam = () => {

    const t  = useTranslations('about')
    const u  = useTranslations('uiComponents')

  return (
    <div className={'mt-[92px] md:mt-[102px] md:grid md:grid-cols-2'}>
      <h2 className={'mb-4'}>{t("joinTeam.title")}</h2>
      <div className={'flex flex-col'}>
        <p className={'mb-8'}>
            {t("joinTeam.subTitle")}
        </p>
        <Button
          variant={'red'}
          targetBlank
          content={u("buttons.join-us")}
          link={'https://www.instagram.com/timerbyathletid/'}
          className={''}
        />
      </div>
    </div>
  )
}

export default JoinTeam;