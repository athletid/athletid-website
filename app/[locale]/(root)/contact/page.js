import React from 'react';
import ContactForm from "@/components/Contact/ContactForm";
import Faq from "@/components/Contact/Faq/Faq";

const Page = () => {
	return (
		<>
			<div className={'max-w-[350px] md:max-w-[770px] px-4 mx-auto'}>
				<ContactForm/>
			</div>
			<div className={'max-w-[350px] md:max-w-[770px] px-4 mx-auto'}>
				<Faq/>
			</div>
		</>
	);
};

export default Page;