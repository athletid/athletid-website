'use client'
import React from 'react'
import 'swiper/css'
import {useTranslations} from "next-intl";
import SearchBar from "@/components/Blog/Search/SearchBar/SearchBar";

const HeaderBlog = (props) => {
	
	const t = useTranslations('blog')
	
	return (
		<div className={'mt-[142px] md:mt-[216px]'}>
			<h1 className={'mb-4'}>{t("title")}</h1>
			<p className={'mb-[72px]'}>
				{t("subTitle")}
			</p>
			
			<SearchBar postTypeClick={props.postTypeClick}/>
		
		</div>
	)
}

export default HeaderBlog;
