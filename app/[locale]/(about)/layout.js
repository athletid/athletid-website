import '@/styles/globals.css'
import {Inter} from 'next/font/google'
import Consent from '@/components/UI/Consent'
import React from "react";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from 'next/navigation';
import Navbar from "@/components/Nav/Navbar";
import FooterAbout from "@/components/Footer/FooterAbout";


const inter = Inter({subsets: ['latin']})


async function getMessages(locale) {
	try {
		return (await import(`../../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
}


export default async function RootLayout({children, params: {locale}}) {
	const messages = await getMessages(locale);
	
	return (
		<html lang={locale}>
		<body className={inter.className}>
		<NextIntlClientProvider locale={locale} messages={messages}>
			<Navbar/>
			{children}
			<FooterAbout/>
			<Consent/>
		</NextIntlClientProvider>
		</body>
		
		</html>
	)
}
