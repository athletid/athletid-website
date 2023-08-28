'use client'
import React, { useEffect, useState } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { IoCloseOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'

const Consent = () => {
  const t  = useTranslations(['uiComponents'])

  const [consent, setConsent] = useState(true)
  useEffect(() => {
    setConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setConsent(true)
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 })
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }
  const closeP = () => {
    setConsent(true)
    console.log('closing')
  }
  const denyCookie = () => {
    setConsent(true)
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 })
    console.log('denying cookie')
  }

  if (consent === true) {
    return null
  }

  return (
      <div
          className={`fixed flex md:flex-row flex-col justify-between lg:items-center bottom-0 w-full px-4 py-2 bg-[#F5F4F5] z-[999] ${
              consent ? 'hidden' : ''
          }`}
      >
        <div className={'md:text-left text-center'}>
          {t('consent.sentence')}{' '}
        </div>
        <div className="flex md:justify-end justify-center space-x-3 md:w-fit w-full md:mt-0 mt-3">
          <button
              onClick={(e) => denyCookie()}
              className="px-2 py-1 bg-[#E63D31] text-white rounded-md"
          >
            {t('consent.buttons.decline')}
          </button>
          <button
              onClick={() => {
                acceptCookie()
              }}
              className="px-2 py-1 bg-black text-white rounded-md"
          >
            {t('consent.buttons.accept')}
          </button>
          <button
              onClick={(e) => {
                closeP()
              }}
              className={'top-2 right-4 lg:static absolute'}
          >
            <IoCloseOutline size={30} color={'black'} />
          </button>
        </div>
      </div>
  )
}

export default Consent
