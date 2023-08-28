'use client'
import React from 'react'
import Image from 'next/image'

const KeyNumbers = () => {
	const keyNumbers = [
		{
			text: "Beta \nUsers.",
			number: "2k",
			src: "/assets/icons/arrow-up.svg",
			width: 30
		},
		{
			text: "Collaborative \nProfessionals.",
			number: "+500",
			src: "/assets/icons/messages.svg",
			width: 20
		},
		{
			text: "New \nUsers",
			number: "+800",
			src: "/assets/icons/flash.svg",
			width: 30
		}
	]
	
	return (
		<div
			className={
				'mx-auto mt-[92px] md:mt-[120px] md:flex md:justify-between md:space-x-8 md:border md:border-black/2 md:px-8 md:rounded-[20px]'
			}
		>
			{keyNumbers.map((value, index) => {
				return (
					<Number
						key={index}
						src={value.src}
						text={value.text}
						width={value.width}
						number={value.number}
					/>
				)
			})}
		</div>
	)
}

export default KeyNumbers

function Number(props) {
	return (
		<div className="flex justify-center space-x-6 py-8 border-b border-black/6 md:border-none">
			<Image
				className={'w-auto'}
				src={props.src}
				height={30}
				width={props.width}
				alt={''}
			/>
			<div className={'flex flex-col space-y-2'}>
				<p className={'text-sm whitespace-pre-line'}>{props.text}</p>
				<span className={'text-4xl md:text-3xl'}>{props.number}</span>
			</div>
		</div>
	)
}
