import React from 'react';
import Script from "next/script";
import {getCookie} from "cookies-next";

export async function generateMetadata({params}) {
	
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}/athletid`;
	
	return {
		title: "Athletid",
		description: "Give meaning to your workouts and unlock your full physical potential with ATHLETID mobile apps",
		url: url,
		openGraph: {
			title: "Athletid",
			description: "Give meaning to your workouts and unlock your full physical potential with ATHLETID mobile apps",
			url: url,
			images: [
				{
					url: "https://i.imgur.com/orFqImv.jpg",
					width: 800,
					height: 600,
				},
				{
					url: "https://i.imgur.com/orFqImv.jpg",
					width: 1800,
					height: 1600,
					alt: 'My custom alt',
				},
			],
			type: "website"
		},
	}
	
}

const Layout = ({children}) => {
	const consent = getCookie('localConsent');
	
	return <>
		<link rel="icon" href="/favicon.ico" sizes="any" />
		<Script
			id="gtag"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
			window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
            });
            
			(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MHQLFD3');`,
			}}
		/>
		
		{consent === true && (
			<Script
				id="consupd"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
				}}
			/>
		)}
		
		<>
			{children}
		</>
	
	</>
};

export default Layout;