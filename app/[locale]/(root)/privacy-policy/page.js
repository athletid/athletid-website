import React from 'react';

const Page = () => {
	return (
		<>
			<div className={'max-w-[350px] md:max-w-[1170px] pt-[142px] lg:pt-[216px] mx-auto px-4 flex flex-col '}>
				<h1 className={'mb-[16px] md:mb-[32px]'}>Politique de confidentialité</h1>
				<p className={''}>Chez ATHLETID, la protection de vos données personnelles est une priorité.
					Lors de votre utilisation du site internet www.athletid.com (ci-après le « Site »), nous sommes
					amenés à
					recueillir des données à caractère personnel vous concernant.
					Le but de cette politique est de vous informer sur les modalités selon lesquelles nous traitons
					ces
					données en conformité avec le Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection
					des
					personnes physiques à l’égard du traitement des données à caractère personnel et à la libre
					circulation
					de ces données (ci-après le « RGPD »).</p>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>1. Qui est le responsable de
					traitement
					?</h3>
				<p>Le responsable de traitement est la société ATHLETID, SAS, immatriculée au RCS de Lille sous le
					n°913 916
					912, ayant son siège social 60 rue Gabriel Péri 59320 Haubourdin. (ci-après « Nous »).</p>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>2. Quelles données
					collectons-nous
					?</h3>
				<p>Une donnée à caractère personnel est une donnée qui permet d’identifier un individu directement
					ou par
					recoupement avec d’autres données.
					Nous collectons des données qui relèvent des catégories suivantes :</p>
				<ul className={'!list-disc'}>
					<li>Des données d’identification (notamment vos nom, prénoms, adresse email et postale, numéro
						de
						téléphone, AppleID, GoogleID) ;
					</li>
					<li>Données relatives à votre vie professionnelle (notamment, l’identité de l’entreprise, le
						poste
						occupé, le secteur d’activité) ;
					</li>
					<li>Des données relatives à vos commandes ;</li>
					<li>Des données de connexion (par exemple adresse IP, logs) ;</li>
					<li>Des données économiques et financières (par exemple : RIB, carte bancaire);</li>
				</ul>
				<p className={'mt-[20px]'}>Les données obligatoires sont indiquées lorsque vous nous fournissez vos
					données.
					Elles sont signalées par un astérisque et sont nécessaires pour vous fournir nos services.</p>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>3. Sur quelles bases
					légales, pour
					quelles
					finalités et
					pendant
					combien de temps conservons-nous vos données personnelles ?</h3>
				<div className={'grid lg:grid-cols-3 lg:space-x-[40px] lg:space-y-0 space-y-[30px]'}>
					<div className={'flex flex-col'}>
						<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>Finalités</h3>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Fournir nos services disponibles sur
							notre
							Site via votre compte</p>
						<p className={'py-[20px] border-t border-t-[#F5F4F5]'}>
							Exécuter votre commande, effectuer les opérations relatives à la gestion de nos clients
							concernant les contrats, commandes, livraisons, factures, programmes de fidélité et
							suivi de la
							relation contractuelle avec nos clients</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Constituer un fichier de clients et
							prospects</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Adresser des newsletters,
							sollicitations et
							messages promotionnels à nos clients</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Adresser des newsletters,
							sollicitations et
							messages promotionnels
							à nos prospect</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>
							Répondre à vos demandes d’information et de support</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Gérer les demandes d’exercice de
							droits</p>
					</div>
					<div className={'flex flex-col'}>
						<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>Bases légales</h3>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Exécution des Conditions Générales
							que vous
							ou votre société avez souscrit avec Nous</p>
						<p className={'py-[20px] border-t border-t-[#F5F4F5]'}>
							Exécution du contrat que vous ou votre société avez souscrit avec Nous</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Notre intérêt légitime à développer
							et
							promouvoir notre activité</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Notre intérêt légitime à fidéliser et
							informer nos clients de nos dernières actualités</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Prospects BtoC : Votre consentement
							Prospects BtoB : Notre intérêt légitime à fidéliser et informer nos prospects de nos
							dernières
							actualités</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>
							Notre intérêt légitime à répondre à vos demandes</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Notre intérêt légitime à répondre à
							vos
							demandes et à conserver un suivi de celles-ci</p>
					</div>
					<div className={'flex flex-col'}>
						<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>Durées de conservation</h3>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Vos données sont conservées pour
							toute la
							durée de votre compte.
							En cas de compte inactif pendant 2 ans, vos données personnelles seront supprimées en
							l’absence
							de réponse de votre part à notre email de réactivation.
							En outre, vos données peuvent être archivées à des fins probatoires pendant une durée de
							5
							ans.</p>
						<p className={'py-[20px] border-t border-t-[#F5F4F5]'}>
							Les données personnelles sont conservées pendant toute la durée de la relation
							contractuelle.
							Vos factures sont archivées pendant une durée de 10 ans.
							En outre, vos données (à l’exception de vos coordonnées bancaires) sont archivées à des
							fins
							probatoires pendant une durée de 5 ans.</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Pour les clients : les données sont
							conservées
							pendant toute la durée de la relation contractuelle.
							Pour les prospects : les données sont conservées pendant un délai de 3 ans à compter de
							votre
							dernier contact, à des fins de prospection.</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Les données sont conservées pendant 3
							ans à
							compter de votre dernier contact avec nous</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Les données sont conservées pendant 3
							ans à
							compter de votre dernier contact avec Nous ou jusqu’au retrait de votre
							consentement.</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>
							Les données sont conservées pendant le temps nécessaire au traitement de votre demande
							et supprimées
							une fois la demande traitée.</p>
						<p className={'py-[20px] border-y border-y-[#F5F4F5]'}>Si nous vous demandons un
							justificatif d’identité
							: nous le conservons seulement pendant le temps nécessaire à la vérification d’identité.
							Une fois la
							vérification effectuée, le justificatif est supprimé.
							Si vous exercez votre droit d’opposition à recevoir de la prospection : nous conservons
							cette
							information pendant 3 ans.</p>
					</div>
				
				</div>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>5. Vos données sont-elles
					susceptibles
					d’être transférées
					hors de l’Union
					européenne ?</h3>
				<p>Vos données sont conservées et stockées pendant toute la durée des traitements sur les serveurs
					de la société
					HOSTINGER situés au Royaume Unis.</p>
				<p>Dans le cadre des outils que nous utilisons (voir article sur les destinataires concernant nos
					sous-traitants), vos données sont susceptibles de faire l’objet de transferts hors de l’Union
					européenne. Le
					transfert de vos données dans ce cadre est sécurisé au moyen des outils suivants :</p>
				<ul className={'!list-disc'}>
					<li>soit les données sont transférées dans un pays ayant fait l’objet d’une décision
						d’adéquation de la
						Commission européenne, conformément à l’article 45 du RGPD : dans ce cas, ce pays assure un
						niveau de
						protection jugé comme suffisant et adéquat aux dispositions du RGPD;
					</li>
					<li>soit les données sont transférées dans un pays dont le niveau de protection des données n’a
						pas été
						reconnu comme adéquat au RGPD : dans ce cas ces transferts sont fondés sur des garanties
						appropriées
						indiquées à l’article 46 du RGPD, adaptées à chaque prestataire, notamment de façon non
						exhaustive la
						conclusion de clauses contractuelles types approuvées par la Commission Européenne,
						l’application de
						règles d’entreprises contraignantes ou en vertu d’un mécanisme de certification approuvé.
					</li>
					<li>soit les données sont transférées sur le fondement de l’une des garanties appropriées
						décrites au
						Chapitre V du RGPD.
					</li>
				</ul>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>6. Quels sont vos droits sur
					vos données
					?</h3>
				
				<p className={'mb-[20px]'}>Vous disposez des droits suivants s’agissant de vos données personnelles
					:</p>
				<ul>
					<li>Droit à l’information: c’est justement la raison pour laquelle nous avons rédigé la présente
						politique.
						Ce droit est prévu par les articles 13 et 14 du RGPD.
					</li>
					<li> Droit d’accès: vous avez le droit d’accéder à tout moment à l’ensemble de vos données
						personnelles, en
						vertu de l’article 15 du RGPD.
					</li>
					<li> Droit de rectification: vous avez le droit de rectifier à tout moment vos données
						personnelles
						inexactes,
						incomplètes ou obsolètes conformément à l’article 16 du RGPD
					</li>
					<li> Droit à la limitation: vous avez le droit d’obtenir la limitation du traitement de vos
						données
						personnelles
						dans certains cas définis à l’article 18 du RGPD.
					</li>
					<li> Droit à l’effacement: vous avez le droit d’exiger que vos données personnelles soient
						effacées, et d’en
						interdire toute collecte future pour les motifs énoncés à l’article 17 du RGPD
					</li>
					<li> Droit d’introduire une réclamation auprès d’une autorité de contrôle compétente (en France,
						la CNIL),
						si
						vous considérez que le traitement de vos données personnelles constitue une violation des
						textes
						applicables. (Article 77 du RGPD)
					</li>
					<li> Droit de définir des directives relatives à la conservation, à l’effacement et à la
						communication de
						vos
						données personnelles après votre mort.
					</li>
					<li>Droit de retirer votre consentement à tout moment: pour les finalités fondées sur le
						consentement,
						l’article
						7 du RGPD dispose que vous pouvez retirer votre consentement à tout moment. Ce retrait ne
						remettra pas
						en
						cause la légalité du traitement effectué avant le retrait.
					</li>
					<li> Droit à la portabilité: selon certaines conditions précisées à l’article 20 du RGPD, vous
						avez le droit
						de
						recevoir les données personnelles que vous nous avez fournies dans un format standard
						lisible par
						machine et
						d’exiger leur transfert au destinataire de votre choix.
					</li>
					<li> Droit d’opposition: en vertu de l’article 21 du RGPD, vous avez le droit de vous opposer au
						traitement
						de
						vos données personnelles. Notez toutefois que nous pourrons maintenir leur traitement malgré
						cette
						opposition, pour des motifs légitimes ou la défense de droits en justice.
					</li>
				</ul>
				
				<p className={'mt-[20px]'}> Droit d’opposition: en vertu de l’article 21 du RGPD, vous avez le droit
					de vous
					opposer au traitement de
					vos données personnelles. Notez toutefois que nous pourrons maintenir leur traitement malgré
					cette
					opposition, pour des motifs légitimes ou la défense de droits en justice.</p>
				
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>7. Point de contact en
					matière de
					données
					personnelles</h3>
				<p>Email de contact : contact@athletid.com
					Adresse de contact : 60 Rue Gabriel Péri, 59320 Haubourdin</p>
				<h3 className={'mb-[16px] md:mb-[32px] mt-[92px] md:mt-[120px]'}>8. Modifications</h3>
				<p>Nous pouvons modifier à tout moment la présente politique, afin notamment de nous conformer à
					toutes
					évolutions réglementaires, jurisprudentielles, éditoriales ou techniques. Ces modifications
					s’appliqueront à
					la date d’entrée en vigueur de la version modifiée. Vous êtes donc invité à consulter
					régulièrement la
					dernière version de cette politique. Néanmoins, nous vous tiendrons informé(e) de toute
					modification
					significative de la présente politique de confidentialité.</p>
				<p className={'mt-[40px]'}>Entrée en vigueur : 23/08/2022</p>
			
			</div>
		</>
	);
};

export default Page;