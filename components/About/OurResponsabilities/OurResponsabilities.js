import Responsability from '@/components/About/OurResponsabilities/Responsability'
import {useTranslations} from "next-intl";
import {responsabilityContent} from "@/messages/about/responsabilityContent";

export default function OurResponsabilities() {
	
	const t = useTranslations('about')
	
	return (
		<div
			className={'mt-[92px] md:mt-[80px] md:grid md:grid-cols-3 md:gap-[72px] lg:p-8 lg:border lg:border-black/6 lg:rounded-medium'}>
			{responsabilityContent.map((value, index) => {
				return (
					<Responsability
						key={index}
						icon={value.icon}
						title={value.title}
						subtitle={value.subTitle}
					/>
				)
			})}
		</div>
	)
}