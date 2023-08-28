'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetcher from '@/lib/fetcher'


export const Post = ({ data }) => {
  const [sections, setSections] = useState(null)

  const { name, img, slug, id } = data
  
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const sectionData = await fetcher(`api/sections/${id}`)
        setSections(sectionData.data)
      }
    }
    fetchData().then()
  }, [id])

  return (
    <Link href={`/posts/${slug}`}>
      <div className={'flex flex-col'}>
        <div
          className={'h-[380px] w-full relative rounded-small overflow-hidden'}
        >
          {img ? (
            <Image
              src={img}
              fill
              priority
              sizes={'100vw'}
              className={'object-cover'}
              alt={''}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={'text-[20px] leading-[32px] mt-4 mb-2 underline'}>
          {name}
        </div>
        <p className={'text-[14px] leading-[24px] text-darkGrey mb-4'}>
          {sections ? sections[0]?.paragraph.substring(0, 100) + ' ...' : ''}
        </p>
        <div className={'flex space-x-2'}>
          <div className={'text-[14px] leading-[17px]'}>Read post</div>
          <Image
            src={'/assets/icons/diagonal-arrow.svg'}
            width={7}
            height={7}
            sizes={'10vw'}
            alt={''}
          />
        </div>
      </div>
    </Link>
  )
}
