'use client'
import React from 'react';
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton
} from "next-share";
import {useRouter} from "next/navigation";

const ShareButtons = (props) => {
	
	let router = useRouter()
	const currentUrl = process.env.NEXT_PUBLIC_SITE_URL + router.asPath
	
	return (
		<div className={'flex space-x-4 order-first md:order-last'}>
			<FacebookShareButton url={currentUrl ? currentUrl : ''}>
				<FacebookIcon size={32} round/>
			</FacebookShareButton>
			<LinkedinShareButton url={currentUrl ? currentUrl : ''}>
				<LinkedinIcon size={32} round/>
			</LinkedinShareButton>
			<EmailShareButton url={currentUrl ? currentUrl : ''}>
				<EmailIcon size={32} round/>
			</EmailShareButton>
		</div>
	);
};

export default ShareButtons;