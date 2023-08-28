'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ToggleButton from '@/components/UI/Button/ToggleButton';
import {AiOutlinePlus} from 'react-icons/ai';
import Button from '@/components/UI/Button/Button';
import Tag from '@/components/UI/Tag';
import {useTranslations} from 'next-intl';
import {useIsMobile} from "@/components/Hooks/useMediaQuery";

const BasicCard = ({className, onClick, id, ...props}) => {
	const [isClick, setIsClick] = useState({[props.id]: true});
	const t = useTranslations('home');
	
	const isMobile = useIsMobile();
	
	useEffect(() => {
		setIsClick((prevIsClick) => ({
			...prevIsClick,
			[props.id]: true,
		}));
	}, []);
	
	const handleClick = () => {
		onClick();
		setIsClick((prevIsClick) => ({
			...prevIsClick,
			[props.id]: !prevIsClick[props.id],
		}));
	};
	
	return (
		<div
			className={clsx(
				`rounded-medium overflow-hidden  w-full h-[500px] relative text-white`,
				className
			)}
		>
			<Image
				className={`object-cover  ${props.objectPosition}`}
				src={isMobile && props.imageKeyMobile ? props.imageKeyMobile : props.imageKey}
				fill
				sizes={'100vw'}
				alt={''}
			/>
			<div
				className={
					isClick[props.id] ?
						` flex flex-col  absolute h-full lg:w-full top-4 left-4 right-4` : 'hidden'
				}
			>
				{props.tag && (
					<Tag
						variant={'white'}
						text={t('tags.soon-available')}
						className={'mb-4'}
					/>
				)}
				<span className={`whitespace-pre-line text-4xl font-medium`}>
          {props.title}
        </span>
				<span
					className={clsx(
						`whitespace-pre-line text-white/40 font-medium md:!text-4xl`,
						props.subTitleClassName
					)}
				>
          {props.subTitle}
        </span>
			</div>
			{props.buttons === 'toggleButton' ? (
				<>
					<div
						className={`absolute h-full lg:w-full bg-white flex flex-col justify-center lg:p-[72px] p-[52px]  transition duration-300
                ${isClick[props.id] ? 'opacity-0' : 'opacity-1'}
                `}
					>
						<div
							className={`${
								isClick[props.id]
									? 'opacity-0' : 'opacity-1 transition delay-[100ms] leading-[20px]  duration-300 flex items-center'
							} text-black ${props.paragraphWidth}`}
						>
							<div>
								<p className={'text-[16px] font-[500] mb-2'}>
									{props.flipContentTitle}
								</p>
								<p className={'text-[14px] whitespace-pre-line'}>
									{props.flipContent}
								</p>
							</div>
							{props.imageKeyFlip && (
								<div className={`relative h-full w-full`}>
									<Image
										src={props.imageKeyFlip}
										alt={''}
										width={props.flipImageWidth}
										height={props.flipImageHeight}
										sizes={'50vw'}
										className={'md:block hidden mx-auto'}
									/>
								</div>
							)}
						</div>
					</div>
					<ToggleButton
						text={'lorem'}
						variant={'red'}
						className={`absolute right-[39px] bottom-[39px] z-[100] !rounded-full ${
							isClick[props.id] ? '' : 'rotate-45'
						}`}
						content={<AiOutlinePlus size={24}/>}
						onClick={handleClick}
					/>
				</>
			) : (
				<Button
					variant={'red'}
					link={props.link}
					className={clsx('absolute right-4 bottom-4 z-[100]', props.buttonClassName)}
					content={t('buttons.discover')}
				/>
			)}
		</div>
	);
};

export default BasicCard;
