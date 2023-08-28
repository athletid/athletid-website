import React from 'react'
import ToggleButton from '@/components/UI/Button/ToggleButton'
import { BsSortUp, BsSortUpAlt } from 'react-icons/bs'
import {useTranslations} from "next-intl";

const SortFilter = ({ ascendingOrder, onSortToggle }) => {

    const  t  = useTranslations('blog')

    return (
      <div className={'mt-[56px]'}>
        <ToggleButton
          onClick={onSortToggle}
          content={
            ascendingOrder === false ? (
              <div className={'flex space-x-3'}>
                <BsSortUp color={'black'} />
                <div>{t('filters.sort.dateDescending')}</div>
              </div>
            ) : (
              <div className={'flex space-x-3'}>
                <BsSortUpAlt color={'black'} />
                <div>{t('filters.sort.dateAscending')}</div>
              </div>
            )
          }
          className={'px-[16px] py-[5px] border-black mb-6'}
        />
      </div>
    )
}

export default SortFilter
