'use client'
import React, {useEffect, useState} from 'react';
import Button from "@/components/UI/Button/Button";

const DownloadButtonWithBar = () => {
	
	return (
		<div className={'grid grid-cols-[1fr_200px_1fr] relative gap-4'}>
			<div className={'border-l border-b border-black relative'}>
				<div
					className={'h-[10px] w-[10px] absolute right-[1px] bottom-[-5.5px] border-r border-b border-black rotate-[-45deg]'}>
				</div>
			</div>
			<div className={'relative h-[100px]'}>
				<Button link={"https://linktr.ee/athletid"}
				        className={'h-fit mt-auto mx-auto absolute transform -translate-x-1/2 left-1/2 bottom-[-25px] w-full text-center'} targetBlank variant={"black"} content={"Download our app"}/>
			</div>

			<div className={'border-r border-b border-black relative'}>
				<div
					className={'h-[10px] w-[10px] absolute left-[1px] bottom-[-5.5px] border-r border-b border-black rotate-[135deg]'}>
				</div>
			</div>
		</div>
	);
};

export default DownloadButtonWithBar;