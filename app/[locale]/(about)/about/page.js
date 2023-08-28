import React from 'react';
import HeaderAbout from "@/components/Header/HeaderAbout";
import OurResponsabilities from "@/components/About/OurResponsabilities/OurResponsabilities";
import CompanyDescription from "@/components/About/CompanyDescription";
import CoFounderCitation from "/components/About/CoFounderCitation";
import KeyNumbers from "@/components/About/KeyNumbers";
import JoinTeam from "@/components/About/JoinTeam";

const Page = () => {
	
	return (<>
			<HeaderAbout/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<OurResponsabilities/>
				<CompanyDescription/>
				<CoFounderCitation/>
				<KeyNumbers/>
				<JoinTeam/>
			</div>
	
	</>);
};

export default Page;